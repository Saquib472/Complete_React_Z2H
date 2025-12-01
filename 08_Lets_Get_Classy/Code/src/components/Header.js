import logo from "url:../../assets/logo.png";
import cart from "url:../../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [userLogBtn , setUserLogBtn] = useState('LogIn')
  return (
    <div className="header">
      <div className="headerContent">
        <div className="logoContainer">
          <img src={logo} />
        </div>
        <div className="foodyBuddy">
          {/* <h1>Foody Buddy</h1> */}
        </div>
        <div className="navItems">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li className="cartContainer">
              <img src={cart} />
            </li>
            <li><button className="Log-In-Out-Btn" onClick={()=>{
              userLogBtn === 'LogIn' ? setUserLogBtn('LogOut') : setUserLogBtn('LogIn')
              }}>{userLogBtn}</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;