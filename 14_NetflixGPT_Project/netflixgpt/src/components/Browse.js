import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import { useSelector } from "react-redux"
import GptSearchPage from "./GptSearchPage"

const Browse = () => {
  const toggleToGptPage = useSelector(store => store.gpt?.toggleToGptPage)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  return (
    <>
    <Header />
    {
      toggleToGptPage ? <GptSearchPage /> :  (
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      )
    }
    </>
  )
}

export default Browse