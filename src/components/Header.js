import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {

  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((store)=>store.user)
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

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        src= {LOGO}
        alt='logo'
      />
      {
        user && (
      <div className='flex p-2'>
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

export default Header
