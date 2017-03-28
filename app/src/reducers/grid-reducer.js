import {
  RECEIVE_GRID,
  CLEAN_GRID
} from '../actions/grid-actions';

const defaultState = { grid: new Set };

const gridReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_GRID:
      return action.grid;
    case CLEAN_GRID:
      return defaultState;
    default:
      return state;
  }
};