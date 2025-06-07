import { Outlet } from "react-router"
import { Navbar } from "../../../ui"

export const HeroesLayout = () => {
  return (
    <>
        <Navbar/>
        <div className="container" >
          <Outlet/>
        </div>
    </>
  )
}
