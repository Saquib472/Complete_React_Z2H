import Header from "./Header"

const LogIn = () => {
  return (
    <div>
        <Header/>
        <div>
            <img className="w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_small.jpg" alt="Background"/>
        </div>
        <form className="bg-black bg-opacity-60 flex flex-col justify-center items-center w-3/12 p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
            <input className="bg-gray-300 p-4 m-5 rounded-lg w-full" type="email" placeholder="Email Address" />
            <input className="bg-gray-300 p-4 m-5 rounded-lg w-full" type="password" placeholder="Password" />
            <button className="bg-red-700 text-white p-4 m-5 rounded-lg w-full font-bold">Sign In</button>
        </form>
    </div>
  )
}

export default LogIn