/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import boardBuilder from '../../modules/boardBuilder';

const board = boardBuilder(10, 10);

const initialState = {
  board,
  gameOver: false,
  gameStart: false,
  boardArray: [],
  playerName: '',
};

const slice = createSlice({
  name: 'move',
  initialState,
  reducers: {
    toggleGameStart: (state, action) => {
      const keys = Object.keys(state.board);
      const result = new Array(Math.ceil(keys.length / 10))
        .fill()
        .map(() => keys.splice(0, 10));
      state.gameStart = true;
      state.boardArray = result;
      state.playerName = action.payload;
    },
    toggleOpen: (state, action) => {
      state.board[action.payload].opened = true;
      if (state.board[action.payload].mined) {
        state.gameOver = true;
      }
    },
    toggleFlag: (state, action) => {
      if (state.board[action.payload].flagged) {
        state.board[action.payload].guess = !state.board[action.payload].guess;
        state.board[action.payload].flagged = !state.board[action.payload].flagged;
      } else if (state.board[action.payload].guess) {
        state.board[action.payload].guess = !state.board[action.payload].guess;
      } else {
        state.board[action.payload].flagged = !state.board[action.payload].flagged;
      }
    },
    toggleGuess: (state, action) => {
      state.board[action.payload].opened = true;
    },
  },
});

export const gameReducer = slice.reducer;

export const {
  toggleOpen,
  toggleFlag,
  toggleGuess,
  toggleGameStart,
} = slice.actions;

export const toggler = (e) => (dispatch) => {
  console.log(e);
  e.preventDefault();
  if (e.type === 'click') {
    dispatch(toggleOpen(e.target.id));
    console.log(`Left Click ${e.target.id}`);
  } else if (e.type === 'contextmenu') {
    dispatch(toggleFlag(e.target.id));
    console.log('Right Click');
  }
};
