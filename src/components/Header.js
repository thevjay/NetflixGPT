import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLanguage} from '../utils/configSlice'


const Header = () => {

  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      Navigate('/')
    }).catch((error) => {
      // An error happened. 
      Navigate('/error')
    });
  }
  
  useEffect(()=>{
    const  unsubscribe = onAuthStateChanged(auth,(user)=>{
        if(user){
            const {uid, email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            Navigate('/browse')
        }else{
            // User is signed out
            dispatch(removeUser());
            Navigate('/')
        }
    });

    // Unsubsribe when component unmounts
    return () => unsubscribe();
},[]) 

const handleGPTSearchClick=()=>{
  // Toggle GPT Search 
  dispatch(toggleGptSearchView())
}

const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        src= {LOGO}
        alt='logo'
      />
      { user && (
        <div className='flex p-2'>
          {showGptSearch && (
            <select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
              { SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button onClick={handleGPTSearchClick} className='py-2 px-2 mx-4 my-2 bg-purple-700 text-white rounded-lg'>
            {showGptSearch ? "Home" : "Search"}
          </button>
          <img 
            className='w-12 h-12'
            src='https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png'
            alt='logo'
          />
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>
      )
    } 
    </div>
  )
}

export default Header;