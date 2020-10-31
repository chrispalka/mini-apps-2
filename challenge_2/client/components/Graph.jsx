import React, { Component } from 'react';
import Chart from 'chart.js';
const moment = require('moment');

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: null,
    }
  }

  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');
    const { labels, prices } = this.props;

    let myChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: [...labels],
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
        xAxes: {
          type: 'time',
          time: {
            unit: 'month'
          }
        }
      }
    })
    this.setState({ chart: myChart })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // update chart according to prop change
    this.state.chart.data.labels = (nextProps.labels)
    // this.state.chart.data.datasets.data = (nextProps.prices)
    // this.state.chart.update();

    this.state.chart.data.datasets.forEach((dataset) => {
      dataset.data.push(nextProps.prices);
      this.state.chart.update();
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