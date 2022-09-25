import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const randomName = faker.name.fullName();
const randomEmail = faker.internet.email();

export const options = {
  responsive: false,
  scales: {
    y: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 1
      }
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'タスク実行状況',
    },
  },
};

const labels = ['未完了', '実行中', '完了'];


export function Graph(props) {

  const data = {
  labels,
  datasets: [
    {
      label: 'タスク数',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      data:[props.mikan,props.zikkou,props.kan],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
  return <Bar height={330} options={options} data={data} />;
}
