import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { useState } from 'react';

import {Bar} from 'react-chartjs-2'
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
function ChartPage(){
    const [dataNums, setDataNums] = useState([3, 6, 9])
    // const clicked = () => setDataNums([9, 6, 9])
    const data = {
        responsive:true,
        maintainAspectRatio: false,
        labels: ["Mon", "Tue", "Wed"], 
        datasets: [
      {
        label: "369",
        data: dataNums,
        borderColor: "black",
        borderWidth: 2,
          }
    ]
    }
    return (
        <div className='charts'>
            <div class="grid-item">
            <div>
            <Bar data={data} id='myChart'></Bar>
            </div>
        </div>
        <div class="second-row-item">
        <Bar data={data} id='myChart'></Bar>

        </div>
        <div class="second-row-item">
        <Bar data={data} id='myChart'></Bar>

        </div>
        
        </div>
    )
}

export default ChartPage