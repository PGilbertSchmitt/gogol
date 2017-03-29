export default {
  frameTime: 2.0, // in seconds
  rules: { // Starting off with Conway's version by default
    birth: [3],
    survive: [2, 3],
    evolve: []
  },
  numStates: 2,
  playing: false
};