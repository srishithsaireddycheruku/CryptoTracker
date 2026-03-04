import CoinTable from "./Components/CoinTable/CoinTable";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <CoinTable/>
    </>
  )
}

export default App;
