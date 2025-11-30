import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const Body = () => {
  const [restaurantList , setRestaurantList] = useState([])
  const [filteredRestaurantList , setFilteredRestaurantList] = useState([])
  const [searchByResName , setSearchByResName] = useState('')

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch('https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.68330&lng=86.983')
    const fetchedData = await data.json()
    setRestaurantList(fetchedData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurantList(fetchedData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return restaurantList === 0 ? (
      <div className="body">
          <div className="search-and-bestBtn">
            <div className="search-and-bestShimmer"></div>
            <div className="search-and-bestShimmer"></div>
          </div>
          <div className="res-Container">
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
    <div className="body">
      <div className="search-and-bestBtn">
        <div>
          <input className="search-by-res" type="text" value={searchByResName} onChange={(e)=>{
            setSearchByResName(e.target.value)
          }}/>
          <button className="search-by-resBtn" onClick={()=>{
            setFilteredRestaurantList(restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchByResName.toLowerCase())))
          }}>Search</button>
        </div>
        <button className="find-top-res-btn" onClick={() => {
          setFilteredRestaurantList(restaurantList.filter((res)=> res.info.avgRating > 4.2))
          }}>Find Top Restaurants</button>
      </div>
      <div className="res-Container">
        {
            filteredRestaurantList.map(resObj => <RestaurantCard key={resObj.info.id} restaurantInfo={resObj}/>)
        }
      </div>
    </div>
  );
};

export default Body;