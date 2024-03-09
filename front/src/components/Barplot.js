import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarPlot = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: 'Count',
              data: Object.values(data).map((item) => item.count),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Uniques',
              data: Object.values(data).map((item) => item.uniques),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: 'white',
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: 'white',
              },
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default BarPlot;
