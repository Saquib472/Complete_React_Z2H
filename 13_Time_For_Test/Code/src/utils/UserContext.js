import { createContext } from "react";

const UserContext = createContext({
    logInUser : 'Default User'
})

export default UserContext

//This is how create a context using createContext with default value