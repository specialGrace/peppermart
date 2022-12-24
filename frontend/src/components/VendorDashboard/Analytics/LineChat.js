import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

const LineChat = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export default LineChat;
