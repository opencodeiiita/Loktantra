'use client';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Candidate {
  name: string;
  votes: number;
  percentage: number;
  image?: string;
}

interface ResultsChartProps {
  candidates: Candidate[];
  totalVotes: number;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ candidates, totalVotes }) => {
  const chartData = {
    labels: candidates.map(c => c.name),
    datasets: [
      {
        label: 'Votes',
        data: candidates.map(c => c.votes),
        backgroundColor: [
          'green',    
          'blue', 
          'orange'     
        ],
        borderColor: [
          'green',
          'blue',
          'orange'
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 7,
            weight: 'bold' as const
          }
        }
      },
      title: {
        display: true,
        text: 'Top Candidates - Vote Distribution',
        font: {
          size: 18,
          weight: 'bold' as const
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const candidate = context.label;
            const votes = context.parsed.y;
            const percentage = ((votes / totalVotes) * 100).toFixed(1);
            return `${candidate}: ${votes.toLocaleString()} votes (${percentage}%)`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...candidates.map(c => c.votes)) * 2,
        title: {
          display: true,
          text: 'Number of Votes',
          font: {
            size: 14,
            weight: 'bold' as const
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Candidates',
          font: {
            size: 14,
            weight: 'bold' as const
          }
        },
        grid: {
          display: false
        }
      }
    },
    dataset: {
      barPercentage: 0.4,
      categoryPercentage: 0.7
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <div className="relative h-80">
        <Bar options={chartOptions} data={chartData} />
        
        <div className="absolute inset-0 pointer-events-none">
          {candidates.map((candidate, index) => {
            if (!candidate.image) return null;
            
            return (
              <div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  left: `${20 + (index * 30)}%`,
                  top: '120px',
                  transform: 'translateX(-50%)'
                }}
              >
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsChart;
