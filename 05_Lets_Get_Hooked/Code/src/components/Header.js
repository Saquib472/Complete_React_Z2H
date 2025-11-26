import logo from "url:../../assets/logo.png";
import cart from "url:../../assets/cart.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="logoContainer">
          <img src={logo} />
        </div>
        <div className="foodyBuddy">
          <h1>Foody Buddy</h1>
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li className="cartContainer">
              <img src={cart} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;