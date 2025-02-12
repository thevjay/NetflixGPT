import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  // Fetch Data from TMDB API and update store
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      <div className=''>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
      {/**
       * MainConatiner
       *  - VideoBackground
       *  - VideoTitle
       *  SecondaryContainer
       *    - MovieList * n
       *      - cards * n
       *    
       */}
    </div>
  )
}

export default Browse
