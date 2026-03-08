import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
            <Navbar/>  {/* this is the navbar that is shared across the pages*/}
            <Outlet/>
        </>
    )
}
export default Layout;