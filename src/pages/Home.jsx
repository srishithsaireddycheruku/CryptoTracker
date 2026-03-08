import Banner from "../Components/Banner/Banner";
import CoinTable from "../Components/CoinTable/CoinTable";
import Navbar from "../Components/Navbar/Navbar";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
function Home(){
    return(
        <>
            <Navbar/>
            <Banner/>
            <CoinTable/>
        </>
    )
}

export default Home;