import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import Container from 'react-bootstrap/Container';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import boardBuilder from '../modules/boardBuilder';
import Board from './components/board';

import 'typeface-jetbrains-mono';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: 'Jetbrains Mono';
  }
`;

const Input = styled(Container)`
  padding-top: 15rem;
  text-align: center;
  margin: auto;
`;

const ButtonContainer = styled(Container)`
  padding-top: 1rem;
  text-align: center;
  margin: auto;
`;

const MainContainer = styled(Container)`
  padding-top: 3rem;
  text-align: center;
  margin: auto;
  h2 {
    color: #39ff14;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      gameStart: false,
      playerName: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      playerName: e.target.value,
    });
  }

  handleSubmit(size, mines) {
    const newBoard = boardBuilder(size, mines);
    const keys = Object.keys(newBoard);
    const result = new Array(Math.ceil(keys.length / 10))
      .fill()
      .map(() => keys.splice(0, 10));
    this.setState({
      gameStart: true,
      boardArray: result,
    });
  }

  render() {
    const {
      gameStart, playerName, boardArray,
    } = this.state;
    return (
      <>
        <GlobalStyle />
        <MainContainer>
          <h2>Minesweeper</h2>
        </MainContainer>
        {
          gameStart === false ? (
            <>
              <Input>
                <input type="text" value={playerName} onChange={this.handleOnChange} placeholder="Enter player name" />
              </Input>
              <ButtonContainer>
                <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit(10, 10)}>Start</button>
              </ButtonContainer>
            </>
          )
            : (
              <MainContainer>
                <Board board={boardArray} />
              </MainContainer>
            )
        }
      </>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
