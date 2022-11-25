import React from "react";
import { Pie } from "react-chartjs-2";
const labels = [
  "Treasury",
  "Marketing",
  "Employess",
  "Office Rent",
  "Other Bills",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Funds",
      backgroundColor: "#cc99ff",
      borderColor: "rgb(0,0,255)",
      data: [11, 23, 38, 13, 15],
    },
  ],
};
export const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
