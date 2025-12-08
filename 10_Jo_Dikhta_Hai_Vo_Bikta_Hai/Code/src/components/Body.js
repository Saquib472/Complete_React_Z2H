import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { RestaurantList_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList , setRestaurantList] = useState([])
  const [filteredRestaurantList , setFilteredRestaurantList] = useState([])
  const [searchByResName , setSearchByResName] = useState('')
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch(RestaurantList_URL)
    const fetchedData = await data.json()
    setRestaurantList(fetchedData.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurantList(fetchedData.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const online = useOnlineStatus()
  
  if(online ===
     false){
    return <h1>Ooopsssss!!!! Please turn on your Network !!!!!</h1>
  }

  return restaurantList.length === 0 ? (
      <div className="px-5 max-w-7xl mx-auto my-10">
          <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
          <RestaurantCardShimmer/>
          <RestaurantCardShimmer/>
          <RestaurantCardShimmer/>
          <RestaurantCardShimmer/>
          <RestaurantCardShimmer/>
          <RestaurantCardShimmer/>
          <RestaurantCardShimmer/>
          <RestaurantCardShimmer/>
        </div>
      </div>) : (
    <div className="px-5 max-w-7xl mx-auto my-10">
      <div className="flex justify-between items-center">
        <div>
          <input className="shadow-lg/60 rounded-lg p-3 mr-2" type="text" value={searchByResName} onChange={(e)=>{
            setSearchByResName(e.target.value)
          }}/>
          <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 cursor-pointer p-3 text-white font-bold rounded-lg hover:scale-105" onClick={()=>{
            setFilteredRestaurantList(restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchByResName.toLowerCase())))
          }}>Search</button>
        </div>
        <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 cursor-pointer p-3 text-white font-bold rounded-lg hover:scale-105" onClick={() => {
          setFilteredRestaurantList(restaurantList.filter((res)=> res.info.avgRating > 4.2))
          }}>Find Top Restaurants</button>
      </div>
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        {
            filteredRestaurantList.map(resObj => <Link className="res-link" key={resObj.info.id} to={'/restaurants/'+resObj.info.id}><RestaurantCard restaurantInfo={resObj}/></Link>)
        }
      </div>
    </div>
  );
};

export default Body;