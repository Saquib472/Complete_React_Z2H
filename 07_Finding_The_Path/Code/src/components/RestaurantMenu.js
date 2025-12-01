import { useEffect, useState } from "react";
import { Restaurant_Menu_URL } from "../utils/constants";
import { useParams } from "react-router";
import RestuarantMenuList from "./RestuarantMenuList";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const [menuDetails , setMenuDetails] = useState(null)
    
    useEffect(()=>{
        fetchMenuData()
    },[])

    const fetchMenuData = async ()=>{
        const data = await fetch(Restaurant_Menu_URL + resId)
        const json = await data.json()
        setMenuDetails(json.data)
    }

    if(!menuDetails) return

    const {name,avgRatingString,totalRatingsString,costForTwo,sla,} = menuDetails.cards[2]?.card?.card?.info
    const {itemCards} = menuDetails.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)
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