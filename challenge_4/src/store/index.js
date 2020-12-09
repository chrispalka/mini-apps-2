import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { gameReducer } from '../reducers/gameplayReducer';

const reducer = combineReducers({
  gameReducer,
});
const store = configureStore({
  reducer,
});

export default store;
