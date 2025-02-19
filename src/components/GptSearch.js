import { BG_IMAGE_URL } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMAGE_URL}
          alt="logo"
          className="h-screen object-cover"
        />
      </div>
      <div className=" ">
        <GptSearchBar/>
        <GptMovieSuggestions/>

        {/**
          * Gpt Search Bar
          * GptMovieSuggestion
          */
        }      
      </div>
    </>
    
  )
}

export default GptSearch
