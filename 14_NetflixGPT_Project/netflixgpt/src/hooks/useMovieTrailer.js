import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../utils/moviesSlice"

const useMovieTrailer = (id) => {
    const dispatch = useDispatch()
    const getVideoTitleId = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        console.log(json)
        const filteredData = json.results.filter(data=> data.type === 'Trailer')
        const trailer = filteredData.length ? filteredData[0] : json.results[0]
        dispatch(addMovieTrailer(trailer))
    }
    useEffect(()=>{
        getVideoTitleId()
    },[])
}

export default useMovieTrailer