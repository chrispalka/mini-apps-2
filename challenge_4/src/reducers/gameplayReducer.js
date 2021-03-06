/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import boardBuilder, { getNeighbors } from '../../modules/boardBuilder';

const mineCount = (inputBoard) => {
  let totalMines = 0;
  Object.keys(inputBoard).forEach((cell) => {
    if (inputBoard[cell].mined) {
      totalMines += 1;
    }
  });
  return totalMines;
};

const initialState = {
  board: '',
  gameOver: false,
  gameStart: false,
  gameWin: false,
  boardArray: [],
  playerName: '',
  totalMines: 0,
  difficulty: 'easy',
};

const checkWin = (ids, board) => {
  for (let i = 0; i < ids.length; i += 1) {
    const currentId = ids[i];
    if (!board[currentId].mined && !board[currentId].opened) {
      return false;
    }
  }
  return true;
};

const slice = createSlice({
  name: 'move',
  initialState,
  reducers: {
    toggleGameEasy: (state, action) => {
      const board = boardBuilder(10, 10);
      const mineTotal = mineCount(board);
      state.board = board;
      state.totalMines = mineTotal;
      const keys = Object.keys(state.board);
      const result = new Array(Math.ceil(keys.length / 10))
        .fill()
        .map(() => keys.splice(0, 10));
      state.gameStart = true;
      state.gameOver = false;
      state.boardArray = result;
      state.playerName = action.payload;
      state.difficulty = 'easy';
    },
    toggleGameMedium: (state, action) => {
      const board = boardBuilder(16, 40);
      const mineTotal = mineCount(board);
      state.board = board;
      state.totalMines = mineTotal;
      const keys = Object.keys(state.board);
      const result = new Array(Math.ceil(keys.length / 16))
        .fill()
        .map(() => keys.splice(0, 16));
      state.gameStart = true;
      state.gameOver = false;
      state.boardArray = result;
      state.playerName = action.payload;
      state.difficulty = 'medium';
    },
    toggleGameHard: (state, action) => {
      const board = boardBuilder(30, 99);
      const mineTotal = mineCount(board);
      state.board = board;
      state.totalMines = mineTotal;
      const keys = Object.keys(state.board);
      const result = new Array(Math.ceil(keys.length / 30))
        .fill()
        .map(() => keys.splice(0, 30));
      state.gameStart = true;
      state.gameOver = false;
      state.boardArray = result;
      state.playerName = action.payload;
      state.difficulty = 'hard';
    },
    toggleNewGame: (state) => {
      if (state.gameOver || state.gameWin) {
        const gameDifficulty = {
          easy: [10, 10],
          medium: [16, 40],
          hard: [30, 99],
        };
        const size = gameDifficulty[state.difficulty][0];
        const mines = gameDifficulty[state.difficulty][1];
        state.gameOver = false;
        const board = boardBuilder(size, mines);
        const mineTotal = mineCount(board);
        state.board = board;
        state.totalMines = mineTotal;
        const keys = Object.keys(state.board);
        const result = new Array(Math.ceil(keys.length / size))
          .fill()
          .map(() => keys.splice(0, size));
        state.gameStart = true;
        state.gameWin = false;
        state.boardArray = result;
      }
    },
    toggleOpen: (state, action) => {
      const keys = Object.keys(state.board);
      const { board } = state;
      const { id } = state.board[action.payload];
      const handleLeftClick = (cellId) => {
        const cell = state.board[cellId];
        if (!state.gameOver && !state.gameWin) {
          if (!cell.guess && !cell.flagged) {
            if (cell.mined) {
              state.gameOver = true;
            } else {
              cell.opened = true;
              if (cell.neighboringMineCount <= 0) {
                const neighbors = getNeighbors(cellId);
                for (let i = 0; i < neighbors.length; i += 1) {
                  const neighbor = neighbors[i];
                  if (typeof board[neighbor] !== 'undefined' && !board[neighbor].flagged && !board[neighbor].opened) {
                    handleLeftClick(neighbor);
                  }
                }
              }
            }
          }
        }
      };
      handleLeftClick(id);
      if (checkWin(keys, state.board)) {
        state.gameWin = true;
        console.log('YOU WIN!');
      }
    },
    toggleRightClick: (state, action) => {
      if (!state.gameOver && !state.gameWin) {
        if (!state.board[action.payload].opened) {
          if (state.board[action.payload].flagged) {
            state.board[action.payload].guess = !state.board[action.payload].guess;
            state.board[action.payload].flagged = !state.board[action.payload].flagged;
            state.totalMines += 1;
          } else if (state.board[action.payload].guess) {
            state.board[action.payload].guess = !state.board[action.payload].guess;
          } else {
            state.board[action.payload].flagged = !state.board[action.payload].flagged;
            state.totalMines -= 1;
          }
        }
      }
    },
  },
});

export const gameReducer = slice.reducer;

export const {
  toggleOpen,
  toggleRightClick,
  toggleGuess,
  toggleGameEasy,
  toggleGameMedium,
  toggleGameHard,
  toggleNewGame,
} = slice.actions;

export const toggler = (e) => (dispatch) => {
  e.preventDefault();
  if (e.type === 'click') {
    dispatch(toggleOpen(e.target.id));
  } else if (e.type === 'contextmenu') {
    dispatch(toggleRightClick(e.target.id));
  }
};
