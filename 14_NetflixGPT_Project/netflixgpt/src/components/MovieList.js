import MovieCard from "./MovieCard"

const MovieList = ({title , movies}) => {
  return movies?.length && (
    <div className="px-9">
        <h1 className="text-white text-2xl py-3">{title}</h1>
        <div className="flex overflow-x-scroll gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {
                movies.map((movie)=> <MovieCard key={movie.id} posterPath={movie.poster_path} />)
            }
        </div>
    </div>
  )
}

export default MovieList