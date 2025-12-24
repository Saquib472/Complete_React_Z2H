import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
  
  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Sign In
        const {uid, email, photoURL, displayName} = user;
        dispatch(addUser({uid, email, photoURL, displayName}))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
    return ()=> unsubscribed()
  }, [])

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between items-center">
        <img className="w-2/12" src={LOGO_URL} alt='Netflix GPT'/>
        {user && (<div className="flex items-center">
          <img src={user.photoURL} alt="userImage" className="max-w-10 rounded-md"/>
          <button onClick={handleSignOut} className="text-white bg-red-500 p-2 rounded-md text-sm m-2 font-bold">Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header