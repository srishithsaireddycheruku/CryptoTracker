import { useState } from "react";
import { fetchCoinHistory } from "../../Services/fetchCoinHistory";
import { useQuery } from "@tanstack/react-query";
import currencyStore from "../../zustandState/store";

function useFetchCoinHistory(coinId) {
    const {currency}=currencyStore();
    const [days,setDays]=useState(7);
    const [interval,setCoinInterval]=useState("daily"); 

    const {data: historicData ,isLoading,isError} = useQuery({
        queryKey: ["coinHistory", coinId, currency, days, interval],
        queryFn: () => fetchCoinHistory(coinId, days, interval, currency),
        cacheTime: 1000 * 60 * 2, // keep cached data for 30 minutes
        staleTime: 1000 * 60 * 2,  // data fresh for 5 minutes
    });

    return [
        historicData,
        isLoading,
        isError,
        setDays,
        setCoinInterval,
        days,
        currency
    ]

}

export default useFetchCoinHistory;