import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {name , avgRating , sla , cuisines , areaName , costForTwo , cloudinaryImageId} = props.restaurantInfo.info
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="res-card-info">
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h3>{avgRating + '.' + sla.slaString}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;