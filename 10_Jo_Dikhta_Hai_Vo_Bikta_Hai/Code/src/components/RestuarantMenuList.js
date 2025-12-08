import { CDN_URL2 } from "../utils/constants"
const RestuarantMenuList = ({menuData}) => {
const {name, price , defaultPrice , description , imageId} = menuData
  return (
    <div className="flex justify-between items-center p-2.5 mb-5 shadow-lg">
        <div className="left-sec-menu">
            <h3 className="font-bold">{name}</h3>
            <h4>{`₹${defaultPrice/100 || price/100}`}</h4>
            <p className="mt-2.5">{description}</p>
        </div>
        <div className="max-w-52">
            <img className="rounded-2xl" src={CDN_URL2 + imageId}></img>
        </div>
    </div>
  )
}

export default RestuarantMenuList