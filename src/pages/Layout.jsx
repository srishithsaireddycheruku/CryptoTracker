import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";

function MainLayout() {
    return(
        <>
            <Navbar />  {/*This navbar is shared across the ui*/}
            <Outlet />   {/* the actual page*/}
        </>
    );
}

export default MainLayout;