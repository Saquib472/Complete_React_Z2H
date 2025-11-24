import {createRoot} from "react-dom/client"
import logo from "url:./assets/logo.png"
import cart from "url:./assets/cart.png"
import biriyani from "url:./assets/biriyani.jpg"

const RestaurantCard = ()=>{
    return (
        <div className="res-card">
            <img src={biriyani}/>
            <h3>Shimla Biriyani</h3>
            <h4>4.3 stars</h4>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                <input type="text"/>
            </div>
            <div className="res-Container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const Header = ()=>{
    return (
        <div className="header">
            <div className="headerContent">
                <div className="logoContainer">
                    <img src={logo}/>
                </div>
                <div className="foodyBuddy"><h1>Foody Buddy</h1></div>
                <div className="navItems">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li className="cartContainer"><img src={cart}/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
createRoot(document.getElementById('root')).render(<AppLayout/>)