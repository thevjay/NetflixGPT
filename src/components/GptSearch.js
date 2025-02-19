import { BG_IMAGE_URL } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 w-full h-full -z-10">
        <img
          src={BG_IMAGE_URL}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>

      {/**
       * Gpt Search Bar
       * GptMovieSuggestion
       */}      
    </div>
  )
}

export default GptSearch
