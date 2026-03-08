import { useParams } from "react-router-dom";
function CoinDetails(){

    const { CoinId } = useParams();
    return(
        <div>
            <h1>Coin Details {CoinId}</h1>
        </div>
    )
}

export default CoinDetails;