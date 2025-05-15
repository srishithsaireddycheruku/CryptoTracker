import { useEffect } from "react";

function CoinTable(){

    // async function download(){
    //     const response = await fetch('https://api.coingecko.com/api/v3/ping');
    //     const data = await response.json();
    //     console.log(data);
    // }


    // useEffect(()=>{
    //     download();
    // }, []);  //ass dependent array is empty..this call will run once only on mounting
    return(
        <> CoinTable</>
    );
}
export default CoinTable;