import { combineReducers } from 'redux';

import gridReducer from './grid-reducer';

export default combineReducers({
  grid: gridReducer
});