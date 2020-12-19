/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import Container from 'react-bootstrap/Container';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import sadface from '../assets/sadface.png';
import smileyface from '../assets/smileyface.png';
import Board from './components/board';
import {
  toggleGameEasy,
  toggleGameMedium,
  toggleGameHard,
  toggleNewGame,
} from './reducers/gameplayReducer';

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
  text-align: center;
  margin: auto;
  h2 {
    color: #39ff14;
  }
  `;
const TitleContainer = styled(Container)`
  padding-top: 3rem;
  text-align: center;
  margin: auto;
  h2 {
    color: #39ff14;
  }
  `;
const GameModeButtonContainer = styled(Container)`
  width: 350px;
  table > tbody > tr > td {
    padding: 0.5rem;
  }
  table {
    margin: auto;
  }
  .game-mode {
    background-color: #343B3F;
  }
  padding: 1rem;
`;

const App = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const {
    gameStart,
    boardArray,
    totalMines,
    playerName,
    gameOver,
    gameWin,
    difficulty,
  } = useSelector((state) => state.gameReducer);

  return (
    <>
      <GlobalStyle />
      <TitleContainer>
        <h2>
          {
            gameWin
              ? 'You Win!'
              : gameOver
                ? 'You Lose!'
                : 'Minesweeper'
          }
        </h2>
      </TitleContainer>
      {
        gameStart === false ? (
          <>
            <Input>
              <input type="text" id="player-name" onChange={(e) => setTitle(e.target.value)} placeholder="Enter player name" />
            </Input>
            <ButtonContainer>
              <button type="button" className="btn btn-primary" onClick={() => dispatch(toggleGameEasy(title))}>Start</button>
            </ButtonContainer>
          </>
        )
          : (
            <MainContainer>
              <div className="smiley">
                <img src={gameOver ? sadface : smileyface} style={{ width: '50px' }} alt="" onClick={() => dispatch(toggleNewGame())} />
              </div>
              <GameModeButtonContainer>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <button type="button" id="easy" className="btn btn-secondary game-mode" onClick={() => dispatch(toggleGameEasy())} disabled={difficulty === 'easy'}>Easy</button>
                      </td>
                      <td>
                        <button type="button" id="medium" className="btn btn-secondary game-mode" onClick={() => dispatch(toggleGameMedium())} disabled={difficulty === 'medium'}>Medium</button>
                      </td>
                      <td>
                        <button type="button" id="hard" className="btn btn-secondary game-mode" onClick={() => dispatch(toggleGameHard())} disabled={difficulty === 'hard'}>Hard</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </GameModeButtonContainer>
              <Board boardArray={boardArray} name={playerName} mineCount={totalMines} />
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
