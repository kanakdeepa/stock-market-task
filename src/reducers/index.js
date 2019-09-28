import { combineReducers } from 'redux';
import stockReducer from './stocks';

const rootReducer = combineReducers({
  stockState: stockReducer,
});

export default rootReducer;
