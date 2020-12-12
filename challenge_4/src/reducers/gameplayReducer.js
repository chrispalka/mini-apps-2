/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import boardBuilder from '../../modules/boardBuilder';

const board = boardBuilder(10, 10);

const initialState = { board };

const slice = createSlice({
  name: 'move',
  initialState,
  reducers: {
    toggleOpen: (state, action) => {
      state.board[action.payload].opened = true;
    },
    toggleFlag: (state, action) => {
      state.board[action.payload].flagged = !state.board[action.payload].flagged;
    },
    toggleGuess: (state, action) => {
      state.board[action.payload].opened = true;
    },
  },
});

export const gameReducer = slice.reducer;

export const { toggleOpen, toggleFlag, toggleGuess } = slice.actions;

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
