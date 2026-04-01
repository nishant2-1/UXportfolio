import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import "./styles/DataViz.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataViz = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Commodity Price Index',
        data: [12000, 14500, 13200, 18500, 22000, 25000, 23800, 27500, 30000, 32000, 35000, 38000],
        borderColor: '#2ee68a',
        backgroundColor: 'rgba(46, 230, 138, 0.16)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#2ee68a',
        pointHoverRadius: 8,
        borderWidth: 2,
      },
      {
        label: 'Predictive Margin Accuracy (%)',
        data: [78, 80, 82, 84, 86, 87, 88, 89, 90, 91, 92, 93],
        borderColor: '#0f8f57',
        backgroundColor: 'rgba(15, 143, 87, 0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#0f8f57',
        pointHoverRadius: 8,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 14,
            weight: 'bold' as const,
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Trading Dashboard: Real-time Analytics',
        color: '#ffffff',
        font: {
          size: 18,
          weight: 'bold' as const,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <div className="data-viz-section" id="data-labs">
      <div className="section-container">
        <h2>
          Data <span>Visualization</span> & Real-Time Analytics
        </h2>
        <p className="viz-subtitle">
          Full-Stack implementation: React frontend with Chart.js/D3.js + Node.js/WebSocket backend for live trading data
        </p>
        <div className="chart-container">
          <Line data={chartData} options={options} />
        </div>
        <div className="viz-features">
          <div className="feature-card">
            <h4>📊 Full-Stack Dashboard</h4>
            <p>React/TypeScript frontend with D3.js + Node.js/Express backend + WebSocket real-time data streaming</p>
          </div>
          <div className="feature-card">
            <h4>🤖 AI Integration</h4>
            <p>Backend predictive models feeding frontend visualizations with explainable AI patterns and audit trails</p>
          </div>
          <div className="feature-card">
            <h4>📈 End-to-End Performance</h4>
            <p>Optimized database queries, efficient API design, and frontend lazy-loading for sub-second response times</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataViz;
