import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className=' mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      {
        /**
         * Popuplar
         * MovieCard* n
         * MovieList - Now Playing
         * MovieList - Trending
         * MOvieList - Hrror
         */
      }
    </div>
  )
}

export default SecondaryContainer
