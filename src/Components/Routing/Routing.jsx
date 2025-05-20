import {lazy}  from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "../../pages/Layout.jsx";
import { Facebook } from "react-content-loader";
const Home = lazy(() => import("../../pages/Home.jsx"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage.jsx"));
function Routing() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout />} >

            <Route index element={<Suspense fallback={<Facebook />}><Home /></Suspense>} />   {/*Here index is nothing but path='/' */}

            <Route path='/details/:coinId' element={<Suspense fallback={<Facebook />}><CoinDetailsPage /></Suspense>} />


        </Route>
        

    </Routes>
  );
}
export default Routing;
