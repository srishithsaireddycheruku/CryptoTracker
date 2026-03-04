import { useEffect,useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable(){

    const [page,setPage]=useState(1);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['coins', page],
        queryFn: () => fetchCoinData(page, 'usd'),
        retry: 2,  //to retry failed requests again
        retryDelay: 1000,
        gcTime: 1000 * 60 * 2, // renamed from cacheTime in v5
    });

    useEffect(()=>{
        console.log(data);
    },[data]);

    if(isLoading){
        return <div> Loading...</div>
    }
    if(isError){
        return <div> Error: {error.message}</div>
    }

    return(
        <>
            CoinTable
            <br />
            <button onClick={()=>setPage(page+1)}>Next Page {page}</button>
        </>
    )
}

export default CoinTable;