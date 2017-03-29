import merge from 'lodash/merge';

import {
  RECEIVE_GRID,
  TOGGLE_CELL,
  CLEAN_GRID
} from '../actions/grid-actions';

const defaultState = new Map;

const gridReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_GRID:
      return action.grid;
    case TOGGLE_CELL:
      return toggleCell(state, action.cell);
    case CLEAN_GRID:
      return defaultState;
    default:
      return state;
  }
};

const toggleCell = (map, cell) => {
  let newMap = new Map([...map]);
  const key = cell.val();
  if (newMap.get(key)) {
    newMap.delete(key);
  } else {
    newMap.set(key, cell);
  }
  return newMap;
};

export default gridReducer;