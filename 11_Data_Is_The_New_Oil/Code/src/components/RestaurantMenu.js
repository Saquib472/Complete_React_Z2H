import { useParams } from "react-router";
import useFetchMenuData from "../utils/useFetchMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchMenuData(resId); // A Custom Hook
  const [openedMenuIndex , setOpenedMenuIndex] = useState(0)
  const [menuOpened , setMenuOpened] = useState(true)

  if (!resInfo) return;

  const { name, avgRatingString, totalRatingsString, costForTwo, sla } =
    resInfo.cards[2]?.card?.card?.info;
  const { cards } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <>
      <div className="mx-auto max-w-4xl mt-20 px-5">
        <h1 className="font-bold text-xl">{name}</h1>
        <div className="shadow-lg/60 p-8 rounded-2xl my-8">
          <h2>{`${avgRatingString}(${totalRatingsString})-${costForTwo}`}</h2>
        </div>
        {cards
          .filter(
            (category) =>
              category.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          .map((category,index) => (
            // Controlled Component - Restaurant Menu is Controlling the state of Restaurant Category Component
            <RestaurantCategory
              key={category.card.card.title}
              categoryItem={category}
              openMenuList={index === openedMenuIndex ? menuOpened : false}
              setIndex={()=>setOpenedMenuIndex(index)}
              setMenuOpened={setMenuOpened}
            />
          ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
