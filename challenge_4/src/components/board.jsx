/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import flag from '../../assets/flag.png';
import mine from '../../assets/mine.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toggler } from '../reducers/gameplayReducer';

const BoardGrid = styled(Container)`
  width: ${(props) => props.size};
  table.table-bordered > tbody > tr > td {
    height: 2rem;
    width: 2rem;
    padding: 2px;
}
`;

const Stats = styled(Container)`
  width: 350px;
  text-align: center;
  margin: auto;
`;

const colorPicker = (mineCount) => {
  const obj = {
    0: null,
    1: 'blue',
    2: 'green',
    3: 'maroon',
    4: 'orange',
  };
  return obj[mineCount];
};

const Board = ({ boardArray, name }) => {
  const dispatch = useDispatch();
  const {
    board,
    gameOver,
    gameWin,
    totalMines,
    difficulty,
  } = useSelector((state) => state.gameReducer);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!gameOver && !gameWin) {
      const timer = setInterval(() => setCount(count + 1), 1000);
      return () => clearInterval(timer);
    }
    setCount(0);
    return false;
  }, [count, gameOver, gameWin, difficulty]);
  return (
    <>
      <Stats>
        <table className="table table-bordered table-dark">
          <tbody>
            <tr>
              <td>Player</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Mines</td>
              <td>{totalMines}</td>
            </tr>
            <tr>
              <td>Timer</td>
              <td>{count}</td>
            </tr>
          </tbody>
        </table>
      </Stats>
      <BoardGrid size={difficulty === 'easy' ? '350px' : difficulty === 'medium' ? '550px' : '950px'}>
        <table className="table table-bordered table-dark">
          <tbody id="square">
            {boardArray.map((x, i) => (
              <tr key={i}>
                {boardArray[i].map((cell) => (
                  <td
                    style={board[cell].mined && gameOver ? { backgroundColor: 'red' }
                      : board[cell].opened
                        ? { backgroundColor: colorPicker(board[cell].neighboringMineCount) }
                        : { backgroundImage: 'radial-gradient(slategray, slategray)' }}
                    key={cell}
                    id={cell}
                    onClick={(e) => dispatch(toggler(e))}
                    onContextMenu={(e) => dispatch(toggler(e))}
                  >
                    {board[cell].opened
                      && board[cell].neighboringMineCount > 0
                      ? board[cell].neighboringMineCount
                      : gameOver && board[cell].mined ? <img id={cell} src={mine} alt="" style={{ width: '15px' }} />
                        : board[cell].guess ? '?'
                          : board[cell].flagged ? <img id={cell} src={flag} alt="" style={{ width: '10px' }} /> : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </BoardGrid>
    </>
  );
};

export default Board;
