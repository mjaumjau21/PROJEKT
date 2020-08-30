import { combineReducers } from 'redux';
import cards from './cards';

let reducers = {
  cards
};

const rootReducer = combineReducers(reducers);

export default rootReducer;