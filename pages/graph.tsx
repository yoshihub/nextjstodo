import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph= (props) => {
  const options = {
    responsive: false,
    plugins: {
      title: {
        display: true,
        text: "タスク実行状況",
      },
    },
  };

  const labels = [
    "未完了",
    "実行中",
    "完了",

  ];

  const data = {
    labels,
    datasets: [
      {
        label: "タスク数",
        data: [props.mikan,props.zikkou,props.kan],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <Line height={300} width={400} options={options} data={data} />
    </>
  );
};

export default Graph;
