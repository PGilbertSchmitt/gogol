export const RECEIVE_GRID = "RECEIVE_GRID";
export const TOGGLE_CELL = "TOGGLE_CELL";
export const CLEAN_GRID = "CLEAN_GRID";

export const receiveGrid = grid => ({
  type: RECEIVE_GRID,
  grid
});

export const toggleCell = cell => ({
  type: TOGGLE_CELL,
  cell
});

export const cleanGrid = () => ({
  type: CLEAN_GRID
});

window.receiveGrid = receiveGrid;
window.toggleCell = toggleCell;