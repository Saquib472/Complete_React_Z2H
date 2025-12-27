import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const nowPlayingMoviesList = useSelector(store => store.movies?.nowPlayingMoviesList)
    if(!nowPlayingMoviesList) return
    const {title, overview, id} = nowPlayingMoviesList[1]

  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer