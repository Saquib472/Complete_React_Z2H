import { useParams } from "react-router";
import RestuarantMenuList from "./RestuarantMenuList";
import useFetchMenuData from "../utils/useFetchMenuData";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useFetchMenuData(resId) // A Custom Hook

    if(!resInfo) return

    const {name,avgRatingString,totalRatingsString,costForTwo,sla} = resInfo.cards[2]?.card?.card?.info
    const {itemCards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return (
        <>
        <div className="mx-auto max-w-4xl mt-20 px-5">
            <h1 className="font-bold text-xl">{name}</h1>
            <div className="shadow-lg/60 p-8 rounded-2xl my-8">
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