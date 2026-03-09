import { Routes, Route } from "react-router-dom";
import {lazy,Suspense} from "react";

import Layout from "../../pages/Layout";

const Home=lazy(() => import("../../pages/Home"));

const CoinDetails=lazy(() => import("../../pages/CoinDetails"));

import {Facebook} from "react-content-loader"

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={
                    <Suspense fallback={<Facebook />}>
                        <Home />
                    </Suspense>
                } /> {/* this is the default page and the index means that it has the same as the parent main page */}
                <Route path="/details/:coinId" element={
                    <Suspense fallback={<Facebook />}>
                        <CoinDetails />
                    </Suspense>
                } />  {/* the ':' indicates that it is a parameter and is dynamic*/}
            </Route>
        </Routes>   
    )
}

export default Routing;