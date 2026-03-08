import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetails from "../../pages/CoinDetails";
import Layout from "../../pages/Layout";
function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} /> {/* this is the default page and the index means that it has the same as the parent main page */}
                <Route path="/details/:CoinId" element={<CoinDetails />} />
            </Route>
        </Routes>   
    )
}

export default Routing;