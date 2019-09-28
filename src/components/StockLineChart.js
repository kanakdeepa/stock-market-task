import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const StockLineChart = props => {
  const [lineData, setLineData] = useState(null);

  const colors = [
    'red',
    'green',
    'blue',
    'black',
    'teal',
    '#d64161',
    '#80ced6',
    '#d4ac6e',
    '#667292',
  ];
  const usedColors = [];

  const generateRandomColor = () => {
    let newColor = colors[Math.round(Math.random() * (colors.length - 1))];
    while (usedColors.some(c => c === newColor)) {
      newColor = colors[Math.round(Math.random() * (colors.length - 1))];
    }
    usedColors.push(newColor);
    return newColor;
  };

  useEffect(() => {
    const { data: allData } = props;
    const params = props.params || ['open', 'close'];

    setLineData({
      labels: allData.map(record => record.date),
      datasets: params.map(param => ({
        label: param.charAt(0).toUpperCase() + param.substring(1),
        borderColor: generateRandomColor(),
        backgroundColor: 'transparent',
        borderWidth: 2,
        data: allData.map(record => record[param]),
      })),
    });
  }, [props.data, props.params]);

  return lineData ? <Line data={lineData} /> : null;
};

export default StockLineChart;
