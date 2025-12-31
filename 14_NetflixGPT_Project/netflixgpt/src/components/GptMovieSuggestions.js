import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {
  const {gptMovies, gptMovieNames} = useSelector(store => store.gpt)
  if(!gptMovies || !gptMovieNames) return null
  return (
    <div className="bg-black bg-opacity-85 m-4">
      {
        gptMovieNames.map((movie,index) => <MovieList key={movie} title={movie} movies={gptMovies[index]}/>)
      }
    </div>
  )
}

export default GptMovieSuggestions