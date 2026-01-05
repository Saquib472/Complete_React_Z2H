import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_MENU,
  PROFILE_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_URL,
} from "../utils/constants";
import { toggleMenu } from "../utils/store/appSlice";
import { useEffect, useState } from "react";
import { searchCache } from "../utils/store/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const cacheData = useSelector(store => store.search)

  useEffect(() => {
    const getSearchQueryResults = async () => {
      const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
      const json = await data.json();
      setSearchResults(json[1]);
      dispatch(searchCache({[searchQuery] : json[1]}))
    };

    const timer = setTimeout(()=>{
      if(cacheData[searchQuery]){
        setSearchResults(cacheData[searchQuery])
      }else {
        getSearchQueryResults()
      }
    },300)

    return ()=>{clearTimeout(timer)}
  }, [searchQuery]);

  const handleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="py-4 px-6 grid grid-flow-col grid-cols-12 shadow-sm sticky top-0 bg-white bg-opacity-95 z-10">
        <div className="flex items-center gap-3 col-span-1 ">
          <img
            onClick={handleSideBar}
            className="max-w-10 cursor-pointer hover:bg-gray-100 hover:p-1 rounded-full"
            src={HAMBURGER_MENU}
            alt="menu"
          />
          <a href="/">
            <img
              className="max-w-28 cursor-pointer"
              src={YOUTUBE_LOGO}
              alt="logo"
            />
          </a>
        </div>
        <div className="col-span-10 flex justify-center">
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setSuggestion(true);
            }}
            onBlur={() => {
              setSuggestion(false);
            }}
            id="searchInput"
            className="w-5/12 border border-gray-400 py-2 px-4 rounded-l-full"
            type="text"
            placeholder="Search"
          />
          <button className="border border-gray-400 py-2 px-4 rounded-r-full bg-gray-100">
            {" "}
            🔍{" "}
          </button>
        </div>
        <div className="col-span-1 flex justify-end">
          <img className="h-9" src={PROFILE_ICON} alt="profile" />
        </div>
      </div>
      {searchResults.length > 0 && showSuggestion && (
        <div className="w-4/12 bg-white fixed left-[32%] z-20 shadow-md border border-gray-300 rounded-lg">
          <ul className="p-2 w-full">
            {searchResults.map((s) => (
              <li
                className="font-semibold rounded-md py-2 px-2 hover:bg-gray-200"
                key={s}
              >
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Head;
