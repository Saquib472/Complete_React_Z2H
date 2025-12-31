import { TMDB_IMAGE_CDN } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className="flex-shrink-0 basis-44">
        <img className="" src={TMDB_IMAGE_CDN + posterPath} alt="imag" />
    </div>
  )
}

export default MovieCard