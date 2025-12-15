import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {name , avgRating , sla , cuisines , areaName , costForTwo , cloudinaryImageId} = props.restaurantInfo.info
  return (
    <div className="rounded-lg shadow-xl overflow-hidden transition-all ease-in-out hover:shadow-2xl hover:scale-105">
      <img className="w-full h-52" src={CDN_URL + cloudinaryImageId} />
      <div className="p-2.5">
        <h3 className="font-bold">{name}</h3>
        <h4>{costForTwo}</h4>
        <h3>{avgRating + '.' + sla.slaString}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export const promotedRestuantCard = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute bg-black text-white top-1.5">Promoted</label>
      <RestaurantCard {...props}/>
    </div>
  )
}

export default RestaurantCard;