import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

//Lazy Loading or Code Splitting or Dynamic Bundling or Chunking or On Demand Load or Dynamic import 
const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
