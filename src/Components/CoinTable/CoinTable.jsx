import { useEffect,useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable(){

    const [page,setPage]=useState(1);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['coins', page],
        queryFn: () => fetchCoinData(page, 'usd'),
        //retry: 2,  //to retry failed requests again
        //retryDelay: 1000,
        gcTime: 1000 * 60 * 2, // renamed from cacheTime in v5
        staleTime: 1000*60*2, // renamed from staleTime in v5 and is used not to make an another api call if the data is already present in the cache and is not stale yet
    });



    if(isError){
        return <div> Error: {error.message}</div>
    }

    return(
        <>
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                {/*header of the table */}
                <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center">
                    <div className="basis-[35%]">
                        Coin
                    </div>
                    <div className="basis-[25%]" >
                        Price
                    </div>
                    <div className="basis-[20%]">
                        24th Change
                    </div>
                    <div className="basis-[20%]">
                        Market Cap
                    </div>
                </div>

                <div className="flex flex-col w-[80vw] mx-auto">
                    {isLoading && <div>Loading...</div>}
                    {data && data.map((coin)=>{
                        return(
                          <div key={coin.id}
                          className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-betweem">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} alt={coin.name} className="w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-3xl">
                                        {coin.name}
                                    </div>
                                    <div className="text-xl">
                                        {coin.symbol.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[25%]">
                                {coin.high_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                          </div>  
                        );
                    })}
                </div>


                <div className="flex gap-4 justify-center items-center">
                    <button className="btn btn-primary text-white text-2xl"
                    onClick={()=>{
                        if(page>1){
                            setPage(page-1);
                        }}}>
                        Previous
                    </button>
                    <button className="btn btn-primary text-white text-2xl"
                    onClick={()=>{
                        setPage(page+1);
                    }}>
                        Next   
                    </button>
                </div>
            </div>
        </>
    )
}

export default CoinTable;