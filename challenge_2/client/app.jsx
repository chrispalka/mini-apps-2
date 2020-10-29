import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
