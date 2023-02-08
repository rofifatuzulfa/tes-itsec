import React from 'react';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
 } from "chart.js";
import { Line } from "react-chartjs-2";

 ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
 );

const LineChart = ({amount, year}) => {
    
    const labels = year;
    const datas = amount;
    // const labels = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul'];
    // const datas = [50, 25, 40, 20, 15, 60, 30];

    const options = {
        responsive: true,
     };
    const data = {
        labels,
        datasets: [{
            data: datas,
            fill: true,
            borderColor: 'rgba(38,38,94,255)',
            tension: 0.5,
            backgroundColor: 'rgba(64,69,140,255)',
            borderWidth: 0.5
        }]
     };

  return (
    <div>
        <Line options={options} data={data} height={100}/>
    </div>
  )
}

export default LineChart