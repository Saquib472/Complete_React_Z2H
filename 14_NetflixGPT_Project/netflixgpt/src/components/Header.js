import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
import { LANGUAGE_OPTIONS, LOGO_URL } from "../utils/constants"
import { removeGptApiKey, removeGptMovieResults, toggleBetweenBrowseAndGpt } from "../utils/gptSlice"
import { selecLanguage } from "../utils/appConfigSlice"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
  const toggleToGptPage = useSelector(store => store.gpt?.toggleToGptPage)
  
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

  const handleGptButton = ()=>{
    dispatch(toggleBetweenBrowseAndGpt())
    dispatch(removeGptMovieResults())
    dispatch(removeGptApiKey())
  }

  const handleLanguage = (e)=>{
    dispatch(selecLanguage(e.target.value))
  }

  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between items-center z-20">
        <img className="w-4/12 md:w-2/12" src={LOGO_URL} alt='Netflix GPT'/>
        {user && (<div className="flex items-center">
            {toggleToGptPage && <select onChange={handleLanguage} className="bg-gray-700 text-white py-1 rounded-md text-xs md:text-sm">
              {
                LANGUAGE_OPTIONS.map(lang => <option key={lang.initializer} value={lang.initializer}>{lang.name}</option>)
              }
            </select>}
          <button onClick={handleGptButton} className="px-2 py-1 md:px-4 md:py-2 bg-purple-700 text-white rounded-md my-2 mx-1 md:m-2 text-xs md:text-sm font-bold">{!toggleToGptPage ?'GPT Search' : 'Back To Home'}</button>
          <img src={user.photoURL} alt="userImage" className="max-w-10 rounded-md hidden md:block"/>
          <button onClick={handleSignOut} className="text-white bg-[red] px-2 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-sm my-2 mx-1 md:m-2 font-bold">Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header