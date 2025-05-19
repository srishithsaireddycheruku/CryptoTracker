import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { fetchCoinDetails } from "../Services/fetchCoinDetails.js";
import store from "../zustandStore/zustandStore.jsx";
function CoinDetailsPage() {

    const { coinId } = useParams();
    const {currency} = store();
    
    const { data:coin, isLoading, isError } = useQuery({ 
        queryKey: ['coin', coinId],
        queryFn: () => fetchCoinDetails(coinId)
    });

    // useEffect(()=>{
    //   console.log(coin);
    // },[coin]);

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error fetching coin details</div>
    }

    return(
      <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
            <img  src={coin?.image?.large} 
                  alt={coin?.name} 
                  className="h-52 mb-5"/>
            <h1 className="text-4xl font-bold mb-5">{coin?.name}</h1>
            <p className="w-full px-6 py-4">{coin?.description?.en}</p>
            <div className="w-full flex felx-col md:flex-row md:justify-around">
              <div className="flex items-center mb-4 md:mb-0">
                <h2 className="text-xl font-bold">Rank</h2>
                <span className="ml-3 text-xl">
                  {coin?.market_cap_rank}
                </span>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                 <h2 className="text-xl text-yellow-400 font-bold"> Current Price</h2>
                <span className="ml-3 text-xl">
                  {coin?.market_data?.current_price[currency]}
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 w-full p-6"> Coin Info</div>
      </div>
    );
}

export default CoinDetailsPage;