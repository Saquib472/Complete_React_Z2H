import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className="bg-black">
      <div className="-mt-72 relative z-40">
        <MovieList title="Now Playing" movies={movies.nowPlayingMoviesList}/>
        <MovieList title="Popular Movies" movies={movies.popularMoviesList}/>
        <MovieList title="Top Rated Movies" movies={movies.topRatedMoviesList}/>
        <MovieList title="Upcoming Movies" movies={movies.upcomingMoviesList}/>
      </div>
    </div>
  )
}

export default SecondaryContainer