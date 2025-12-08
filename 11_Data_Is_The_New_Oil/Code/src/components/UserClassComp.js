import React from "react";

class UserClassComp extends React.Component {
    
    constructor(props){
        console.log('Child constructor')
        super(props)
        this.state = {
            count : 0,
            count1 : 0,
            userInfo : {
                name : 'dummy',
                avatar_url : 'dfdfdfdfd'
            }
        }
    }

    async componentDidMount(){
        console.log('Child component did mount')
        const data = await fetch('https://api.github.com/users/Saquib472')
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo : json
        })
        
    }

    render(){
        console.log('Child render')
        const {name , address} = this.props
        const {count , count1 , userInfo} = this.state
        return (
            <>
            <div>
                <h1>{name}</h1>
                <h3>{address}</h3>
                <h4>{count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count : count + 1
                    })
                }}>Increase</button>
                <h4>{count1}</h4>
            </div>
            <div>
                <img src={userInfo.avatar_url}/>
                <h2>{userInfo.name}</h2>
            </div>
            </>
        )
    }
}

export default UserClassComp