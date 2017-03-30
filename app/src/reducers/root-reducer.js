import { combineReducers } from 'redux';

import gridReducer from './grid-reducer';
import controlReducer from './control-reducer';
import countReducer from './count-reducer';

export default combineReducers({
  grid: gridReducer,
  controls: controlReducer,
  frameCount: countReducer
});