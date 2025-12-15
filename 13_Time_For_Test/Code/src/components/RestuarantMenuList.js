import { useDispatch } from "react-redux"
import { CDN_URL2 } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const RestuarantMenuList = ({menuData}) => {
  const {name, price , defaultPrice , description , imageId} = menuData
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className="flex justify-between items-center p-2.5 mb-5 bg-white rounded-lg mt-4">
        <div className="left-sec-menu">
            <h3 className="font-bold">{name}</h3>
            <h4>{`₹${defaultPrice/100 || price/100}`}</h4>
            <p className="mt-2.5">{description}</p>
        </div>
        <div className="max-w-28 relative p-2">
            <img className="rounded-2xl" src={CDN_URL2 + imageId}></img>
            <button onClick={()=> handleAddItem(menuData)} className="bg-indigo-600 cursor-pointer text-white py-0.5 px-2.5 rounded-lg absolute top-0 right-0 hover:scale-95">Add+</button>
        </div>
    </div>
  )
}

export default RestuarantMenuList