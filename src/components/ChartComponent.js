import React from "react";
import { Doughnut } from "react-chartjs-2";

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            data: [65, 59, 80, 81, 56],
            borderColor: '#121212',
            borderWidth: 1,
        }
    ]
}

function ChartComponent() {
    return (
        <Doughnut
            data={state}
            options={{
                title: {
                    display: true,
                    text: 'Average Rainfall per month',
                    fontSize: 18,
                    fontColor: '#968da3',
                },
                legend: {
                    display: true,
                    position: 'right'
                },
            }}
        />
    );
}

export default ChartComponent
