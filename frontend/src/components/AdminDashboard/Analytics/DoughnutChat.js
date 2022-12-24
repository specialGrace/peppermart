import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

const DoughnutChat = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
}; 

export default DoughnutChat;
