import React, { Component } from 'react';
import Chart from 'chart.js';
const moment = require('moment');

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }
  chartRef = React.createRef();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');
    const { data: { bpi } } = this.props;
    const dates = Object.keys(bpi)
    const prices = Object.values(bpi)


    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: [...dates],
        datasets: [{
          label: 'BTC Price over time',
          data: [...prices],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
        },
        x: {
          type: 'time',
          time: {
            unit: 'month'
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default Graph;