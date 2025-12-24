import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR } from "../utils/constants";

const LogIn = () => {
  const dispatch = useDispatch()
  const [loggedInUser, setLoggedInUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setLoggedInUser(!loggedInUser);
  };

  const handleButtonClick = () => {
    const error = checkValidData(email.current.value, password.current.value);
    setErrorMessage(error);
    if (error) return; // If there is any validation Error it will not proceed further.

    // SIGN UP AND SIGN IN LOGIC
    if (!loggedInUser) {
      //SIGN UP LOGIC
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: AVATAR
          }).then(() => {
            // Profile updated!
            const {uid, email, photoURL, displayName} = auth.currentUser;
            dispatch(addUser({uid, email, photoURL, displayName}))
          }).catch((error) => {
            setErrorMessage(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+' '+errorMessage)
        });
    } else {
      //SIGN IN LOGIC
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+' '+errorMessage)
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_small.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black bg-opacity-90 flex flex-col w-3/12 p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
      >
        <h1 className="text-white font-bold text-lg mb-3">
          {loggedInUser ? "Sign In" : "Sign Up"}
        </h1>
        {!loggedInUser && (
          <input
            ref={name}
            className="bg-gray-700 p-2 my-3 rounded-sm w-full text-white focus:outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="bg-gray-700 p-2 my-3 rounded-sm w-full text-white focus:outline-none"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="bg-gray-700 p-2 my-3 rounded-sm w-full text-white focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700 text-xs font-bold">{errorMessage}</p>
        <button
          className="bg-red-600 text-white p-2 my-5 rounded-md w-full font-bold"
          onClick={handleButtonClick}
        >
          {loggedInUser ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer text-white text-xs mt-3"
          onClick={handleSignIn}
        >
          {loggedInUser
            ? "Not Registered? Sign Up now"
            : "Already registerd? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
