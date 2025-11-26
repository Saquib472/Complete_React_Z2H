import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList , setrestaurantList] = useState(resList)

  return (
    <div className="body">
      <div className="search-and-bestBtn">
        <input type="text" />
        <button className="find-top-res-btn" onClick={() => {
          setrestaurantList(restaurantList.filter((res)=> res.info.avgRating > 4))
          }}>Find Top Restaurants</button>
      </div>
      <div className="res-Container">
        {
            restaurantList.map(resObj => <RestaurantCard key={resObj.info.id} restaurantInfo={resObj}/>)
        }
      </div>
    </div>
  );
};

export default Body;