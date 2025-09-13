import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
   BarController,
  LineElement,
  LineController,
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
   BarController,
  LineElement,
  LineController
);

const data: ChartData<'bar' | 'line', number[], string> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      type: 'bar',
      label: 'Income',
      data: [3000, 4000, 7000, 2000, 6000, 3500],
      backgroundColor: '#a855f7',
      borderRadius: 6,
      barPercentage: 0.6,
    },
    {
      type: 'line',
      label: 'moMGrowth',
      data: [35, 60, 15, 98, -26, -100],
      borderColor: '#be185d',
      backgroundColor: '#be185d',
      pointRadius: 0,
      fill: false,
      yAxisID: 'y1',
    },
  ],
};

const options: ChartOptions<'bar' | 'line'> = {
  scales: {
    y: { beginAtZero: true, min: 0, max: 8000, ticks: { stepSize: 2000 } },
    y1: { beginAtZero: true, min: -100, max: 100, display: false },
  },
  plugins: { legend: { display: false } },
  responsive: true,
  maintainAspectRatio: false,
};

const IncomeTrendChart = () => (
  <div className="bg-white rounded-xl shadow px-4 py-3 mb-4">
    <div className="font-semibold text-sm mb-1">Income Trend</div>
    <div className="text-xs text-gray-400 mb-2">
      Your monthly income and growth for the last 6 months.
    </div>
    <div className="h-36 mb-4">
      <Chart type="bar" data={data} options={options} />
    </div>
    <div className="flex gap-5 items-center mt-1 ml-2">
      <div className="flex items-center gap-1">
        <span className="inline-block w-4 h-4 rounded-sm" style={{ background: '#a855f7' }} />
        <span className="text-[15px] text-[#a855f7] font-medium">income</span>
      </div>
      <div className="flex items-center gap-1">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="9" r="2.5" stroke="#be185d" strokeWidth="2" fill="white" />
          <circle cx="13" cy="9" r="2.5" stroke="#be185d" strokeWidth="2" fill="white" />
          <line x1="7.5" y1="9" x2="10.5" y2="9" stroke="#be185d" strokeWidth="2" />
        </svg>
        <span className="text-[15px] text-[#be185d] font-medium">momGrowth</span>
      </div>
    </div>
  </div>
);

export default IncomeTrendChart;
