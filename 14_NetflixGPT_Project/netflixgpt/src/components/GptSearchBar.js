import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptApiKey, addGptMovieResults } from "../utils/gptSlice";
import OpenAI from 'openai';

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langInit = useSelector((store) => store.config?.language);
  const gptApiKey = useSelector(store => store.gpt?.gptApiKey)
  const [gptKey, setGptKey] = useState(gptApiKey)
  const [gptFetchFailed, setGptFetchFailed] = useState(false)
  const gptSearchInput = useRef(null);

  const openai = new OpenAI({
  //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
      apiKey: gptApiKey,
      dangerouslyAllowBrowser : true
  });

  const handleGptKey = ()=>{
    dispatch(addGptApiKey(gptKey))
  }

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
    return json.results
  }
  const handleGptSearch = async () => {
    let gptResults;
    let gptMovies;
    // Make API Call to GPT API and Get Movies results Only If user provides the Open AI API Key
    if(gptApiKey){
      const gptQuery =
        "Act as a Movie Recommmendation system and suggest some movies for the query: " +
        gptSearchInput.current.value +
        ". Only give me names of 5 movies, comma separeted like the example given ahead. Example - Hero,Dilwale,Gadar,Baby,Don";
      
      try {
        gptResults = await openai.responses.create({
          model: 'gpt-4o',
          instructions: 'You are a movie recommendation system that gives names of movies',
          input: gptQuery,
        });
        gptMovies = gptResults.output_text.split(',')
        setGptFetchFailed(false)
      } catch (error) {
        console.log(error)
        // API is not working for the Billing Lets have some hard coded value
        gptMovies = ['Hera Pheri', 'Raaz', 'Andaaz Apna Apna', 'Golmaal', 'Padosan']
        setGptFetchFailed(true)
      }
    }else {
      // API is not working for the Billing Lets have some hard coded value
      gptMovies = ['Hera Pheri', 'Raaz', 'Andaaz Apna Apna', 'Golmaal', 'Padosan']
    }

    
    // Loop over each movie name and call the TMDB Movie Api
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    const tmdbresults = await Promise.all(promiseArray)
    dispatch(addGptMovieResults({gptMovieNames : gptMovies , gptMovies : tmdbresults}))
    };

  return (
    <form className="w-11/12 md:w-5/12 m-auto pt-32 pb-8" onSubmit={(e) => e.preventDefault()}>
      <div className="bg-black grid grid-flow-col p-3 rounded-sm">
        <input
          value={gptKey}
          onChange={(e)=>{
            setGptKey(e.target.value)
          }}
          className="px-4 py-2 col-span-10 rounded-md mr-2"
          type="text"
          placeholder={lang[langInit].gptApiKeyPlaceHolder}
        />
        <button
          onClick={handleGptKey}
          className="bg-red-700 text-white rounded-md px-4 py-2 col-span-2"
        >
          {lang[langInit].submit}
        </button>
      </div>
      {gptFetchFailed && <div className="text-white bg-black p-3 rounded-sm">Wrong API Key.Showing Default Results</div>}
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
