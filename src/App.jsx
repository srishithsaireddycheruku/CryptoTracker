import React, { useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner.jsx';
import CoinTable from './Components/CoinTable/CoinTable.jsx'
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Routing from './Components/Routing/Routing.jsx';
// import { CurrencyContext } from './CurrencyContext/CurrencyContext.jsx';
function App() {
  // const [currency,setCurrency]=useState('usd');
  return (
    <>
      {/* <CurrencyContext.Provider value={{currency,setCurrency}}> */}
        <Routing/> 
      {/* </CurrencyContext.Provider> */}
    </>
  );
}

export default App
