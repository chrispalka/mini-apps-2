import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chris'
    }
  }

  render() {
    return(
    <h1>{this.state.name}</h1>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)