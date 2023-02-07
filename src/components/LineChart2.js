import React, { useEffect, useState } from 'react';
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
import axios from "axios";


 ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
 );

 export const options = {
    responsive: true,
    plugins: [{
        decimation: true
    }]
 };

 const labels = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul'];
 const datas = [50, 25, 40, 20, 15, 60, 30];

 export const data = {
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

const LineChart2 = () => {

    const [usd, setUsd] = useState();
    const [eur, setEur] = useState();
    const [gbp, setGbp] = useState();

    const getUsd = () => {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((res) => setUsd(res.data.bpi.USD.rate))
    };

    const getEur = () => {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((res) => setEur(res.data.bpi.EUR.rate))
    };

    const getGbp = () => {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((res) => setGbp(res.data.bpi.GBP.rate))
    };

    useEffect(() => {
        getUsd();
        getEur();
        getGbp();
    }, []);
    
    // const labels = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul'];
    // const datas = [50, 25, 40, 20, 15, 60, 30];
    const labels2 = ['USD', 'EUR', 'GBP'];
    const datas2 = [2, 3, 2];

    // const data = {
    //     labels,
    //     datasets: [{
    //         data: datas,
    //         fill: true,
    //         borderColor: 'rgba(38,38,94,255)',
    //         tension: 0.5,
    //         backgroundColor: 'rgba(64,69,140,255)',
    //         borderWidth: 0.5
    //     }]
    //  };
    
     const data2 = {
        labels2,
        datasets: [{
            data: datas2,
            borderColor: 'white',
            tension: 0.5,
            backgroundColor: 'white',
            borderWidth: 0.5
        }]
     };

  return (
    <div>
        <Line options={options} data={data2} height={100}/>
    </div>
  )
}

export default LineChart2