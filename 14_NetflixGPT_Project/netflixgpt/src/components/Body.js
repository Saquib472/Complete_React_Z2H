import { createBrowserRouter, RouterProvider } from "react-router"
import LogIn from "./LogIn"
import Browse from "./Browse"

const Body = () => {
    const appRoute = createBrowserRouter([
        {
            path : '/',
            element : <LogIn />
        },
        {
            path : '/browse',
            element : <Browse />
        }
    ])

  return (
    <RouterProvider router={appRoute} />
  )
}

export default Body