export const RECEIVE_CONTROLS = "RECEIVE_CONTROLS";
export const RESET_CONTROLS = "RESET_CONTROLS";

export const receiveControls = controls => ({
  type: RECEIVE_CONTROLS,
  controls
});

export const resetControls = () => ({
  type: RESET_CONTROLS
});