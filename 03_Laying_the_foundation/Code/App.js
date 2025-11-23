import {createRoot} from "react-dom/client"
import Profile from "url:./assets/profile.jpg"
import HtmlLogo from "url:./assets/html.png"
import CssLogo from "url:./assets/css.png"
import JsLogo from "url:./assets/js.png"
import ReactLogo from "url:./assets/reactIcon.png"
import ReduxLogo from "url:./assets/redux.png"
import VueLogo from "url:./assets/vue.png"
import NpmLogo from "url:./assets/npm.png"

const imageArray = [HtmlLogo,CssLogo,JsLogo,ReactLogo,ReduxLogo,VueLogo,NpmLogo]

const ImageContainer = ({imgSrc})=>{
    return (
        <img src={imgSrc} />
    )
}

function App() {
  return (
    <header className="main">
        <div className="header">
            <div className="leftSectionOfHeader">
                {
                    imageArray.map(el=> <ImageContainer imgSrc={el} key={el}/>)
                }
            </div>
            {/* <input type="text"></input> */}
            <img src={Profile} className="profile"/>
        </div>
    </header>
  )
}

createRoot(document.getElementById('root')).render(<App />)

