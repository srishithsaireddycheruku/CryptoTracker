import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../Services/fetchCoinDetails";
import parse from "html-react-parser";
import currencyStore from "../zustandState/store";
import { Facebook } from "react-content-loader";
import CoinInfoContainer from "../Components/CoinInfo/CoinInfoContainer";
function CoinDetails(){

    const { coinId } = useParams();
    const {currency}=currencyStore();

    const { isError, isLoading, data: coin } = useQuery({
        queryKey: ["coin", coinId],
        queryFn: () => fetchCoinDetails(coinId),
        cacheTime: 1000 * 60 * 30, // keep cached data for 30 minutes
        staleTime: 1000 * 60 * 5,  // data fresh for 5 minutes
    });

    
    if(isLoading){
        return <Facebook /> // Show loading skeleton while fetching data
    }
    if(isError){
        return <div>Error fetching coin details</div>
    }
    
    
    return(
        <div className="flex flex-col md:flex-row">
            <div
             className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 corder-r-2 border-gray-500">
                <img 
                    src={coin?.image?.large} alt={coin?.name} 
                    className="h-52 mb-5"
                />

                <h1 className="text-4xl font-bold mb-5">
                    {coin?.name}
                </h1>

                <p
                 className="w-full px-6 py-4 text-gray-300 text-justify">
                    {parse(coin?.description?.en.split(". ")[0] + ".")}
                </p>

                <div className="w-full flex flex-col md:flex-row md:justify-around">
                    <div className="flex items-center md-4 nd:mb-0">
                        <h2 className="text-xl font-bold">Rank</h2>
                        <span className="ml-3 text-xl">
                            {coin?.market_cap_rank}
                        </span>
                    </div>
                </div>
                
                <div className="flex items-center md-4 nd:mb-0">
                    <h2 className="text-xl text-yellow-400 font-bold">Curr Price</h2>
                        <span className="ml-3 text-xl">
                            {coin?.market_data?.current_price[currency]}
                        </span>
                </div>

            </div>

            <div className="md:w-2/3 full">
                <CoinInfoContainer coinId={coinId}/>
            </div>
        </div>
    )
}

export default CoinDetails;