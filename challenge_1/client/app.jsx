const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.component {
  render() {
    return
      <h1>My App</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
