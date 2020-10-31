import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph.jsx';
import styles from './styles/styles.css';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      labels: [],
      prices: [],
      selectedDate: '',
      dates: {
        week: 'start=2020-10-26&end=2020-10-31',
        month: 'start=2020-10-01&end=2020-10-31',
        year: 'start=2020-01-01&end=2020-10-31',
        all: '',
      }
    }
    this.getCurrentPrice = this.getCurrentPrice.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }


  componentDidMount() {
    this.getCurrentPrice('start=2020-10-26&end=2020-10-31');
  }


  getCurrentPrice(date) {
    const url = `http://localhost:3000/currentprice/${date}`
    axios(url)
      .then((response) => {
        const { data: { bpi } } = response;
        this.setState({
          isLoaded: true,
          labels: Object.keys(bpi),
          prices: Object.values(bpi),
        });
      });
  }

  handleDateSelect(e) {
    const { dates } = this.state;
    this.setState({
      selectedDate: e.target.value,
    })
    this.getCurrentPrice(dates[e.target.value]);
  }
  render() {
    const { labels, prices, isLoaded } = this.state;
    return (
      <>
      <label htmlFor='date'>Select Format: </label>
      <select onChange={this.handleDateSelect}>
        <option value='week'>Week</option>
        <option value='month'>Month</option>
        <option value='year'>Year</option>
        <option value='all'>All</option>
      </select>
      {
        isLoaded ? (
          <Graph labels={ labels } prices={ prices }/>
          )
          : <div>Loading...</div>
        }
        <small style={{color: 'gray', fontStyle: 'italic'}}>Powered by CoinDesk</small>
      </>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
