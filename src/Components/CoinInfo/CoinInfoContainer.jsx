import CoinInfo from "./CoinInfo";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../Hooks/useFetchCoinHistory";
function CoinInfoContainer({ coinId }){
    const [historicData,isLoading,isError,setDays,setCoinInterval,days,currency]=useFetchCoinHistory(coinId);
    if(isError){
        return <Alert message="Error fetching coin history data" type="error"/>
    }

    return(

        <>
            <CoinInfo 
                historicData={historicData} 
                setDays={setDays} 
                setCoinInterval={setCoinInterval} 
                days={days}
                currency={currency}
                loading={isLoading}
            />
        </>
    )
}

export default CoinInfoContainer;