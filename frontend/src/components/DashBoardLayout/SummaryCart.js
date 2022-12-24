import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const SummaryCart = () => {
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
    options: {
      scales: {
        xAxes: [
          {
            barThickness: 0.2, // number (pixels) or 'flex'
            maxBarThickness: 2,
            barPercentage: 0.5, // number (pixels)
          },
        ],
      },
    },
  };

  return (
    <div className="">
      <Bar data={data} width={400} height={400} />
    </div>
  );
};

export default SummaryCart;
