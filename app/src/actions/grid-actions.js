export const RECEIVE_GRID = "RECEIVE_GRID";
export const CLEAN_GRID = "CLEAN_GRID";

export const receiveGrid = grid => ({
  type: RECEIVE_GRID,
  grid
});

export const cleanGrid = () => ({
  type: CLEAN_GRID
});

window.receiveGrid = receiveGrid;