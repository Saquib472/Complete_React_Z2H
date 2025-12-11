import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

//Lazy Loading or Code Splitting or Dynamic Bundling or Chunking or On Demand Load or Dynamic import 
const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  const [userName, setUserName] = useState('')

  useEffect(()=>{
    setUserName('Najmush')
  },[])

  return (
    <UserContext.Provider value={{logInUser : userName , setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children : [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path : '/contact',
        element: <ContactUs />
      },
      {
        path : '/restaurants/:resId',
        element: <RestaurantMenu />
      },
      {
        path : '/grocery',
        element: <Suspense><Grocery /></Suspense>
      }
    ],
    errorElement: <Error/>
  }
])

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
