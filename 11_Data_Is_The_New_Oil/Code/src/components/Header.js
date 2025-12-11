import logo from "url:../../assets/logo.png";
import cart from "url:../../assets/cart.png";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [userLogBtn , setUserLogBtn] = useState('LogIn')
  const online = useOnlineStatus() // A Custom Hook
  const {logInUser} = useContext(UserContext) // fetching the context using useContext Hook by passing the context we created
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
            <li>Online Status: {online ? '🟢' : '🔴'}</li>
            <li className="hover:scale-105"><Link to='/'>Home</Link></li>
            <li className="hover:scale-105"><Link to='/about'>About</Link></li>
            <li className="hover:scale-105"><Link to='/contact'>Contact</Link></li>
            <li className="hover:scale-105"><Link to='/grocery'>Grocery</Link></li>
            <li className="w-16 cursor-pointer hover:scale-105">
              <img src={cart} />
            </li>
            <li><button className="Log-In-Out-Btn" onClick={()=>{
              userLogBtn === 'LogIn' ? setUserLogBtn('LogOut') : setUserLogBtn('LogIn')
              }}>{userLogBtn}</button>
            </li>
            <li className="font-bold">{logInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;