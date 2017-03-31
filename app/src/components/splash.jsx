import React from 'react';

const Splash = () => (
  <div className="splash">
    <h1>Game of Life</h1>
    <p><a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway's Game of Life</a> is an example of a cellular automaton, where discrete "cells", or positions in space with a finite number of states, interact with each other based on a given set of rules. Every frame, the cells change based off of their neighbors.</p>

    <p>Conway's version, devised in 1970, is only one such rule. Dead cells with 3 living neighbors come to life during the next frame, and living cells with 2 or 3 neighbors stay alive. However, there are many ways to determine which cells live or die.</p>

    <p>Visit <a href="https://en.wikipedia.org/wiki/Life-like_cellular_automaton" target="_blank">this page</a> for some possible options. My favorite is Seeds, where Birth is set to 2 and Survive is set to none (all cells die, but growth is explosive).</p>
  </div>
);

export default Splash;