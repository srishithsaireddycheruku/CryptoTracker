import { useState, useEffect,useContext } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../../CurrencyContext/CurrencyContext";
import store from "../../zustandStore/zustandStore.jsx";
import { useNavigate } from "react-router-dom";
import { Facebook } from "react-content-loader";
function CoinTable() {

    const {currency} = store();

    const [page, setPage] = useState(1);

    const { data: rawData, isLoading, isError, error } = useQuery({ 
        queryKey: ['coins', page,currency], 
        queryFn: () => fetchCoinData(page, currency) 
    });

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Raw Data:", rawData); // Debugging API response
    }, [rawData]);

    const data = Array.isArray(rawData) ? rawData : [];
    
    if (isLoading) {
        return <Facebook />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                {/* Header of the table */}
                <div className="basis-[35%]">Coin</div>
                <div className="basis-[25%]">Price</div>
                <div className="basis-[20%]">24hr Change Value</div>
                <div className="basis-[20%]">Market Cap</div>
            </div>

            <div className="w-full flex flex-col gap-2">
                {data.length > 0 ? (
                    data.map((coin) => (
                        <div onClick={() => navigate(`/details/${coin.id}`)} key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" alt={coin.name} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-sm text-gray-400">{coin.symbol}</div>
                                </div>
                            </div>
                            <div className="basis-[25%]">{coin.current_price}</div>
                            <div className="basis-[20%]">{coin.price_change_24h} %</div>
                            <div className="basis-[20%]">{coin.market_cap}</div>
                        </div>
                    ))
                ) : (
                    <div className="text-white text-lg">No data available. Try refreshing.</div>
                )}
            </div>

            <div className="flex gap-4 mt-4">
                <button
                    className="bg-yellow-400 text-black px-4 py-2 rounded disabled:opacity-50"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <span className="text-white font-semibold">Page {page}</span>
                <button
                    className="bg-yellow-400 text-black px-4 py-2 rounded"
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={data.length === 0}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CoinTable;
