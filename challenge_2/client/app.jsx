import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
    }
    this.getCurrentPrice = this.getCurrentPrice.bind(this);
  }


  componentDidMount() {
    this.getCurrentPrice();
  }


  getCurrentPrice() {
    const url = 'http://localhost:3000/currentprice'
    axios(url)
      .then((response) => {
        const { data } = response;
        this.setState({
          isLoaded: true,
          data: data,
        })
      })
  }
  render() {
    const { data, isLoaded } = this.state;
    return (
      <>
      {
        isLoaded ? (
          <Graph data={ data } />
        )
          : <div>Loading...</div>
      }
      </>
    )
  }
}

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
