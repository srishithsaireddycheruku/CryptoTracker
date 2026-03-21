import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { chartDays } from "../../Helpers/constants";
Chart.register(CategoryScale);

function CoinInfo({ historicData, setDays, setCoinInterval, days, currency, loading }) {

  function handleDayChange(event) {
    const selectedDays = event.target.value;
    if(selectedDays === "1"){
      setCoinInterval("hourly");
    }    else{
      setCoinInterval("daily");
    }
    setDays(event.target.value);
  }

  if (loading) {
    // Suspense placeholder instead of Alert
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-blue-600 font-semibold">Loading chart...</span>
      </div>
    );
  }

  if (!historicData) {
    return <Alert message="No historical data available for this coin." type="info" />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 w-full">
      <div className="h-[300px] w-full">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]);
              let time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price (Past ${days} ${days === 1 ? "Day" : "Days"}) in ${currency.toUpperCase()}`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
                borderColor: "#3b82f6",
                tension: 0.3,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            elements: {
              point: { radius: 1 },
            },
          }}
        />
      </div>

      <div className="flex justify-center mt-5 w-50">
        <select
          className="select select-primary w-full max-w-xs"
          onChange={handleDayChange}
          value={days}
        >
          {chartDays.map((day, index) => (
            <option key={index} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CoinInfo;
