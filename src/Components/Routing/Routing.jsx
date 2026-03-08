import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetails from "../../pages/CoinDetails";
function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:CoinId" element={<CoinDetails />} />
        </Routes>   
    )
}

export default Routing;