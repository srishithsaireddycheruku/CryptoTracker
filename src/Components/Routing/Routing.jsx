import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetails from "../../pages/CoinDetails";
import Layout from "../../pages/Layout";
function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} /> {/* this is the default page and the index means that it has the same as the parent main page */}
                <Route path="/details/:coinId" element={<CoinDetails />} />  {/* the ':' indicates that it is a parameter and is dynamic*/}
            </Route>
        </Routes>   
    )
}

export default Routing;