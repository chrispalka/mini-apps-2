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
    this.getHistoricalData = this.getHistoricalData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getHistoricalData()
  }

  getHistoricalData(query = '') {
    const url = `http://localhost:3000/events?q=${query}&_limit=10`
    axios(url)
      .then((response) => {
        const { data } = response;
        this.setState({ data: data })
      })
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
    this.getHistoricalData(e.target.value)
  }

  render() {
    const { data, search } = this.state;
    return (
      <>
        <div>
          <form>
            <label>
              Search:
            <input type='text' value={search} onChange={this.handleChange} />
            </label>
          </form>
        </div>
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
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
