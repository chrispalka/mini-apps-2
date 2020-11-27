import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = styled(Container)`
  width: 350px;
`;

const ButtonContainer = styled(Container)`
background-color: slategrey;
text-align: center;
margin: auto;
border-radius: 1em;
.btn-secondary {
  margin-bottom: 10px;
  padding: 30px;
}
.btn-group-vertical {
  padding: 10px;
  margin: auto;
}
`;

const SecondaryContainer = styled(Container)`
  .go-button {
    margin: 50px;
    padding: 50px;
    font-size:20pt;
    border-radius: 5em;
  }
`;

const Input = styled(InputGroup)`
  .form-control {
    margin-top: 10px;
    border-radius: 5em;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MainContainer>
        <div>
          <h1>HI</h1>
        </div>
        <ButtonContainer>
          <Input>
            <input type="text" placeholder="Enter Pin Quantity" className="form-control" />
          </Input>
          <div className="btn-group-vertical" role="group">
            <button type="button" className="btn btn-secondary">1</button>
            <button type="button" className="btn btn-secondary">4</button>
            <button type="button" className="btn btn-secondary">7</button>
          </div>
          <div className="btn-group-vertical" role="group">
            <button type="button" className="btn btn-secondary">2</button>
            <button type="button" className="btn btn-secondary">5</button>
            <button type="button" className="btn btn-secondary">8</button>
          </div>
          <div className="btn-group-vertical" role="group">
            <button type="button" className="btn btn-secondary">3</button>
            <button type="button" className="btn btn-secondary">6</button>
            <button type="button" className="btn btn-secondary">9</button>
          </div>
          <div className="zeroth-button">
            <button type="button" className="btn btn-secondary" style={{ width: '100%', padding: '10px' }}>0</button>
          </div>
        </ButtonContainer>
        <SecondaryContainer>
          <div className="bowl-button">
            <button type="button" className="btn btn-danger go-button">BOWL!</button>
          </div>
        </SecondaryContainer>
      </MainContainer>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
