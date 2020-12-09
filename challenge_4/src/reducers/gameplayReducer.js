/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { space: 0 };

const slice = createSlice({
  name: 'move',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.space = 1;
    },
    toggleFlag: (state) => {
      state.space = 2;
    },
    toggleGuess: (state) => {
      state.space = 3;
    },
  },
});

export const gameReducer = slice.reducer;

export const { toggleOpen, toggleFlag, toggleGuess } = slice.actions;
