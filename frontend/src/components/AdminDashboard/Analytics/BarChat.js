import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

const BarChat = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default BarChat;
