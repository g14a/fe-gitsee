import React from "react";
import { Bar } from "react-chartjs-2";

const bargraph = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "Rainfall",
            backgroundColor: "rgba(75,192,192,1)",
            data: [65, 59, 80, 81, 56],
        },
    ],
};

function ChartComponent() {
    return (
        <Bar
            data={bargraph}

            options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 22,
                    color: "white",
                },
                legend: {
                    display: true,
                    position: "right",
                },
            }}
        />
    );
}

export default ChartComponent
