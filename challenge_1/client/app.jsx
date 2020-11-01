import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
import ReactPaginate from 'react-paginate';
import './styles/styles.css';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
    }
    this.getHistoricalData = this.getHistoricalData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.getHistoricalData()
  }

  getHistoricalData(query = '') {
    const { offset, perPage } = this.state
    const url = `http://localhost:3000/events?q=${query}`
    axios(url)
      .then((response) => {
        const { data } = response;
        const slicedData = data.slice(offset, offset + perPage)
        this.setState({
          pageCount: Math.ceil(data.length / perPage),
          data: slicedData,
        })
      })
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
    this.getHistoricalData(e.target.value)
  }

  handlePageClick(e) {
    const { perPage, search } = this.state
    const selectedPage = e.selected;
    const offset = selectedPage * perPage
    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.getHistoricalData(search)
    });
  }

  render() {
    const { data, search, pageCount } = this.state;
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
        <div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
