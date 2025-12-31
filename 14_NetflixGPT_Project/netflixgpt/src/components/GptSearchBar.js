import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langInit = useSelector((store) => store.config?.language);
  const gptSearchInput = useRef(null);

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
    return json.results
  }
  const handleGptSearch = async () => {
    console.log(gptSearchInput.current.value);

    // Make API Call to GPT API and Get Movies results
    // const gptQuery =
    //   "Act as a Movie Recommmendation system and suggest some movies for the query: " +
    //   gptSearchInput.current.value +
    //   ". Only give me names of 5 movies, comma separeted like the example given ahead. Example - Hero,Dilwale,Gadar,Baby,Don";
    
    // const gptResults = await openai.responses.create({
    //   model: 'gpt-4o',
    //   instructions: 'You are a movie recommendation system that gives names of movies',
    //   input: gptQuery,
    // });

    // console.log(gptResults.output_text);

    // API is not working for the Billing Lets have some hard coded value
    const gptMovies = ['Hera Pheri', 'Raaz', 'Andaaz Apna Apna', 'Golmaal', 'Padosan']
    
    // Loop over each movie name and call the TMDB Movie Api
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    const tmdbresults = await Promise.all(promiseArray)
    console.log(tmdbresults)
    dispatch(addGptMovieResults({gptMovieNames : gptMovies , gptMovies : tmdbresults}))
    };

  return (
    <form className="w-5/12 m-auto pt-32 pb-8" onSubmit={(e) => e.preventDefault()}>
      <div className="bg-black grid grid-flow-col p-3 rounded-sm">
        <input
          ref={gptSearchInput}
          className="px-4 py-2 col-span-10 rounded-md mr-2"
          type="text"
          placeholder={lang[langInit].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className="bg-red-700 text-white rounded-md px-4 py-2 col-span-2"
        >
          {lang[langInit].search}
        </button>
      </div>
    </form>
  );
};

export default GptSearchBar;
