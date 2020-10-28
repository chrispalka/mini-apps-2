import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
    }
    this.getHistoricalData.bind(this);
  }

  componentDidMount() {
    this.getHistoricalData()
  }

  getHistoricalData() {
    const url = `http://localhost:3000/events?_page=1&_limit=10`
    axios(url)
      .then((response) => {
        const { data } = response;
        this.setState({ data: data })
      })
  }

  handleSearch(e) {

  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Language</th>
              <th>Category 1</th>
              <th>Category 2</th>
              <th>Granularity</th>
            </tr>
          </thead>
          <Table data={data} />
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
