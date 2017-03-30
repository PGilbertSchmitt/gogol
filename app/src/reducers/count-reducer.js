import {
  STEP_COUNT,
  RESET_COUNT
} from '../actions/count-actions';

const countReducer = (state = 0, { type }) => {
  switch (type) {
    case STEP_COUNT:
      return state + 1;
    case RESET_COUNT:
      return 0;
    default:
      return state;
  }
};

export default countReducer;