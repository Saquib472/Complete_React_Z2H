import { Outlet } from "react-router"
import SideBar from "./SideBar"

const Body = () => {
  return (
    <div className="py-4 px-6 grid grid-flow-col grid-cols-12 col-span-12">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body