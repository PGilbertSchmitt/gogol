import {
  RECEIVE_CONTROLS,
  RESET_CONTROLS
} from '../actions/control-actions';

import defaultState from '../util/defaultControls';

const controlReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CONTROLS:
      return action.controls;
    case RESET_CONTROLS:
      return defaultState;
    default:
      return state;
  }
};

export default controlReducer;