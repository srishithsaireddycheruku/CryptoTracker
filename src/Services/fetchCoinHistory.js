import axiosInstance from "./axiosInstance";

export async function fetchCoinHistory(id, days = 7,interval, currency = 'usd'){
    try{
        const response=await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`, {
            params: {
                days,
                interval,
                vs_currency: currency
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}