import { useState } from "react"
import RestuarantMenuList from "./RestuarantMenuList"

const RestaurantCategory = ({categoryItem , openMenuList , setIndex , setMenuOpened}) => {
    const {itemCards} = categoryItem.card.card
    return (
        <div className="shadow-xs/20 bg-gray-50 mb-5 p-4 rounded-xl transition-all ease-in-out">
            <div data-testid="accord" className="flex justify-between cursor-pointer" onClick={()=> {
                setIndex()
                setMenuOpened(!openMenuList)
                }
            }>
                <div className="font-bold">{categoryItem.card?.card?.title} ({itemCards.length})</div>
                <div>{openMenuList ? '⏫' :'⏬'}</div>
            </div>
            {
               openMenuList ? itemCards.map(res => <RestuarantMenuList key={res.card.info.id} menuData={res.card.info}/>) : null
            }
        </div>
    )
}

export default RestaurantCategory