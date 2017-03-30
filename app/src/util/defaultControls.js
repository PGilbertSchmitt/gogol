export default {
  frameTime: 2.0, // in seconds
  rules: { // Starting off with Conway's version by default
    birth: { 3: true },
    survive: { 2: true, 3: true },
    evolve: {}
  },
  numStates: 2,
  playing: false
};