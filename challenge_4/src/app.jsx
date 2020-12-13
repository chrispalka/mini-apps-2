import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import Container from 'react-bootstrap/Container';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/board';
import { toggleGameStart } from './reducers/gameplayReducer';

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

const App = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { gameStart, boardArray } = useSelector((state) => state.gameReducer);
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
              <input type="text" id="player-name" onChange={(e) => setTitle(e.target.value)} placeholder="Enter player name" />
            </Input>
            <ButtonContainer>
              <button type="button" className="btn btn-primary" onClick={() => dispatch(toggleGameStart(title))}>Start</button>
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
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
