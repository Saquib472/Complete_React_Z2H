import logo from "url:../../assets/logo.png";
import cart from "url:../../assets/cart.png";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [userLogBtn , setUserLogBtn] = useState('LogIn')
  const [openHam, setOpenHam] = useState(false)
  const online = useOnlineStatus() // A Custom Hook
  const {logInUser} = useContext(UserContext) // fetching the context using useContext Hook by passing the context we created
  const items = useSelector((state) => state.cart.items)
  return (
    <div className="shadow-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5">
        <div className="w-20">
          <img src={logo} />
        </div>
        {/* <div className="foodyBuddy">
          <h1>Foody Buddy</h1>
        </div> */}
        <div className="navItems">
          <ul className="flex items-center gap-5">
            <li className="text-sm">Online Status: {online ? '🟢' : '🔴'}</li>
            <li className="hidden hover:scale-105 md:block"><Link to='/'>Home</Link></li>
            <li className="hidden hover:scale-105 md:block"><Link to='/about'>About</Link></li>
            <li className="hidden hover:scale-105 md:block"><Link to='/contact'>Contact</Link></li>
            <li className="hidden hover:scale-105 md:block"><Link to='/grocery'>Grocery</Link></li>
            <li className="w-16 cursor-pointer hover:scale-105 relative">
              <Link to='/cart'>
                <img src={cart} />
                <p className="absolute top-0 right-0.5 font-bold text-lg">{items.length}</p>
              </Link>
            </li>
            <li><button className="Log-In-Out-Btn" onClick={()=>{
              userLogBtn === 'LogIn' ? setUserLogBtn('LogOut') : setUserLogBtn('LogIn')
              }}>{userLogBtn}</button>
            </li>
            <li className="font-bold">{logInUser}</li>
            <li className="cursor-pointer md:hidden" onClick={()=> setOpenHam(!openHam)}> {!openHam ? '☰' : "X"}</li>
            {openHam && <ul className="absolute z-10 top-20 right-3 bg-white opacity-95 py-2 px-2 shadow-lg rounded-lg md:hidden">
              <li className="hover:bg-gray-200 px-8 my-1 mt-2 bg-gray-100"><Link to='/'>Home</Link></li>
              <li className="hover:bg-gray-200 px-8 my-1 bg-gray-100"><Link to='/about'>About</Link></li>
              <li className="hover:bg-gray-200 px-8 my-1 bg-gray-100"><Link to='/contact'>Contact</Link></li>
              <li className="hover:bg-gray-200 px-8 my-1 mb-2  bg-gray-100"><Link to='/grocery'>Grocery</Link></li>
            </ul>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;