import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import {client} from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  
    const dispatch = useDispatch();
    const langKey =useSelector((store)=>store.config.lang)
    const searchText = useRef(null);


    //search movie in TMDB
    const searchMovieTMDB = async(movie)=>{
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
      const json = await data.json()

      if(json.results.length === 0){
        console.log("No movies found")
        return;
      }
      
      return json.results;
    }

    
    const handleGptSearchClick = async()=>{
      //setLoading(true);

      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_AI)
      const model = genAI.getGenerativeModel({model:'gemini-1.5-flash'});

      const prompt =
      searchText.current.value +
      "only give the names of movies and not a single extra information, only give strict 5 recommendations, comma seperated";
      try{
        const geminiResult = await model?.generateContent(prompt);
        const gptMovieList =
          geminiResult.response.candidates[0].content.parts[0].text.split(',');

        const searchResults = 
            geminiResult.response.candidates[0].content.parts[0].text;

        const promiseArray = gptMovieList.map((movie,index)=>searchMovieTMDB(movie))

        const tmdbResponse = await Promise.all(promiseArray)

        // console.log(gptMovieList)
        console.log(tmdbResponse)

        dispatch(addGptMovieResult({movieNames: gptMovieList,movieResults: tmdbResponse}))
      }
      catch(error){
        console.error("Error generating content:", error);
      }
    }

    // const handleGptSearchClick = async() =>{
    //   console.log(searchText.current.value)

    //   if(!searchText.current.value.trim()){
    //     console.log("Please enter a movie name. ")
    //     return;
    //   }
    //   // Make an API call to GPT API and get Movie Result
    //     const gptQuery = 
    //       "Act as a Movie Recommendation System and suggest some movies for the query : "+
    //       searchText.current.value +
    //       ", only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar, sholay, don, Golmaal ";

    //     // const getResults = await client.chat.completions.create({
    //     //   messages: [{ role: 'user', content: gptQuery }],
    //     //   model: 'gpt-4o',
    //     // });

    //     //For each movie i will search TMDB

    //     const  data = await searchMovieTMDB(searchText.current.value); 

    //     console.log(data)
    //   }

  return (
    <div className=' pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
        <input 
            ref={searchText}
            type='text' 
            className='p-4 m-4 col-span-9 w-full' 
            placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className=' col-span-3 py-2 px-4 m-4 bg-red-600 text-white' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
