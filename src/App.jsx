import React, { useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner.jsx';
import CoinTable from './Components/CoinTable/CoinTable.jsx'
import Navbar from './Components/Navbar/Navbar.jsx';
function App() {
  const [currency,setCurrency]=useState('usd');
  return (
    <>
      <Navbar setCurrency={setCurrency}/>
      <Banner/>
      <h3 style={{ textAlign: 'center' }}>{currency}</h3>
      <CoinTable currency={currency}/>
    </>
  );
}

export default App
