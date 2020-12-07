import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Container from 'react-bootstrap/Container';
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
      board: [],
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

  handleSubmit(size) {
    const newBoard = boardBuilder(size);
    this.setState({
      board: newBoard,
      gameStart: true,
    });
  }

  render() {
    const { gameStart, board, playerName } = this.state;
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
                <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit(9)}>Start</button>
              </ButtonContainer>
            </>
          )
            : (
              <MainContainer>
                <Board board={board} />
              </MainContainer>
            )
        }
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
