import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
    this.getCurrentPrice = this.getCurrentPrice.bind(this);
  }

  componentDidMount() {
    this.getCurrentPrice();
  }

  getCurrentPrice() {
    axios('http://localhost:3000/currentprice')
    .then((response) => {
      const { data } = response;
      this.setState({
        data: data,
      })
    })
  }
  render() {
    return(
      <h1>hi</h1>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
