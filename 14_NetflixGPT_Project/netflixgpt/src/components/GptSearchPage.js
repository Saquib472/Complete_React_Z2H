import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="w-full" src={BACKGROUND_IMG} alt="Background" />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
