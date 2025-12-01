import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { RestaurantList_URL } from "../utils/constants";
import { Link } from "react-router";

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

  return restaurantList.length === 0 ? (
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
            filteredRestaurantList.map(resObj => <Link className="res-link" key={resObj.info.id} to={'/restaurants/'+resObj.info.id}><RestaurantCard restaurantInfo={resObj}/></Link>)
        }
      </div>
    </div>
  );
};

export default Body;