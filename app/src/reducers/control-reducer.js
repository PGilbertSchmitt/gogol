import {
  RECEIVE_CONTROLS,
  RESET_CONTROLS
} from '../actions/control-actions';

const defaultState = {
  frameTime: 2.0, // in seconds
  rules: { // Starting off with Conway's version by default
    birth: [3],
    survive: [2, 3],
    evolve: []
  },
  numStates: 2,
  playing: false
};

const controlReducer = (state, action) => {
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