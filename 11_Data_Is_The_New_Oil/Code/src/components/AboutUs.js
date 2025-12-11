import UserContext from "../utils/UserContext";
import UserClassComp from "./UserClassComp";
import UserFuncComp from "./UserFuncComp";
import { Component } from "react";


// Functional Component
// const AboutUs = ()=>{
//     return (
//         <div>
//             <h1>This is About Us</h1>
//             <UserFuncComp name={'Najmush Saquib Ali from Functional Component.'} address={'Burdwan'}/>
//             <UserClassComp name={'Najmush Saquib Ali from Class based Component.'} address={'Burdwan'}/>
//         </div>
//     )
// }


// Class based Component
class AboutUs extends Component {
    constructor(){
        super()
        console.log('Parent constructor')
    }
    componentDidMount(){
        console.log('Parent component did mount')
    }
    render(){
        console.log('Parent render')
        return (<div>
            <h1>This is About Us</h1>
            {/* fetching context using context.consumer */}
            <UserContext.Consumer>
                {
                    ({logInUser})=> <h1 className="font-bold">Manager , {logInUser}</h1>
                }
            </UserContext.Consumer>
            <UserFuncComp name={'Najmush Saquib Ali from Functional Component.'} address={'Burdwan'}/>
            <UserClassComp name={'Najmush Saquib Ali from Class based Component.'} address={'Burdwan'}/>
        </div>)
    }
}

export default AboutUs;