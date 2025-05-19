import CoinDetailsPage from "../../pages/CoinDetailsPage";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../../pages/Layout.jsx";

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout />} >
            
            <Route index element={<Home />} />   {/*Here index is nothing but path='/' */}

            <Route path='/details/:coinId' element={<CoinDetailsPage />} />

            
        </Route>
        

    </Routes>
  );
}
export default Routing;
