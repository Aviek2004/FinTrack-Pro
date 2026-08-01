import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const CashChart = ({ income, expense, darkMode }) => {
  const data = {
    labels: ["Income vs Expense"],

    datasets: [
      {
        label: "Income",
        data: [income],
        backgroundColor: "#16a34a",
      },
      {
        label: "Expense",
        data: [expense],
        backgroundColor: "#dc2626",
      },
    ],
  };

 const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
      labels: {
        color: darkMode ? "#ffffff" : "#000000",
      },
    },
  },

  scales: {
    x: {
      ticks: {
        color: darkMode ? "#ffffff" : "#000000",
      },
      grid: {
        color: darkMode ? "#4b5563" : "#e5e7eb",
      },
    },

    y: {
      beginAtZero: true,
      ticks: {
        color: darkMode ? "#ffffff" : "#000000",
      },
      grid: {
        color: darkMode ? "#4b5563" : "#e5e7eb",
      },
    },
  },
};

  return (
    <div
  className={`mt-8 rounded-xl border p-6 shadow-sm transition-all ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white"
      : "bg-white text-black"
  }`}
>
      <h2 className="mb-6 text-2xl font-bold">
        Cash Flow Analysis
      </h2>

      <Bar data={data} options={options} />
    </div>
  );
};

export default CashChart;