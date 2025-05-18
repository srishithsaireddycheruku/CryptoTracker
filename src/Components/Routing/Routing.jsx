import CoinDetailsPage from "../../pages/CoinDetailsPage";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:coinId' element={<CoinDetailsPage />} />
    </Routes>
  );
}
export default Routing;
