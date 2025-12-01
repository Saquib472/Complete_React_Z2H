import { CDN_URL2 } from "../utils/constants"
const RestuarantMenuList = ({menuData}) => {
const {name, price , defaultPrice , description , imageId} = menuData
  return (
    <div className="menu-container">
        <div className="left-sec-menu">
            <h3>{name}</h3>
            <h4>{`₹${defaultPrice/100 || price/100}`}</h4>
            <p>{description}</p>
        </div>
        <div className="right-sec-menu">
            <img className="menu-image" src={CDN_URL2 + imageId}></img>
        </div>
    </div>
  )
}

export default RestuarantMenuList