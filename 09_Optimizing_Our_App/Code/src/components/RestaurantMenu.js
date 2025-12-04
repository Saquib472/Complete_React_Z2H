import { useParams } from "react-router";
import RestuarantMenuList from "./RestuarantMenuList";
import useFetchMenuData from "../utils/useFetchMenuData";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useFetchMenuData(resId)

    if(!resInfo) return

    const {name,avgRatingString,totalRatingsString,costForTwo,sla} = resInfo.cards[2]?.card?.card?.info
    const {itemCards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return (
        <>
        <div className="res-menu-details">
            <h1>{name}</h1>
            <div className="res-menu-details-rating-sec">
                <h2>{`${avgRatingString}(${totalRatingsString})-${costForTwo}`}</h2>
            </div>
            {
                itemCards.map(res => <RestuarantMenuList key={res.card.info.id} menuData={res.card.info}/>)
            }
        </div>
        </>
    )
}

export default RestaurantMenu;