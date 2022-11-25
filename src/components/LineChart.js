// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Monthly Content Reach",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [5500, 10000, 9232, 12045, 14389, 14021, 45],
    },
  ],
};

export const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};
