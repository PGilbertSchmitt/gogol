# GoGoL

Not related to Google

## The original Game of Life

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) is an example of a cellular automaton, where discrete "cells", or positions in space with a finite number of states, interact with each other based on a given set of rules. Conway's version, devised in 1970, involves an infinite grid (though that can vary), and each cell only has two states: on and off (aka living and dead). The rules are simple. Every generation:  
- A dead cell comes to life if it has exacly three living neighbors
- A living cell stays alive if it has two or three living neighbors

The cells can exhibit complex behavior in parallel, such as oscillators (configurations of cells that loop between the same set of finite states) and gliders (like oscillators, but that move in a single direction ad infinitum). It's even been found to be Turing complete, meaning it can be thought of as a [universal machine](https://en.wikipedia.org/wiki/Universal_Turing_machine) (hint hint, that means it can be configured to act as a [computer](https://pdfs.semanticscholar.org/19ea/f250c6b311870efa0950e642fb18febcfaf5.pdf))

## Concept

Conway's Game of Life has always been intriguing to me. However, it is only a single set of rules that govern a planar universe, but there are many others that exhibit their own interesting complex behavior. Behold, the Game of the Game of Life. While technically still only a [zero player game](https://en.wikipedia.org/wiki/Zero-player_game), GoGoL provides the controls to define your own rules for how the universe should behave. Go ahead, play God. Uh, I mean...play GoGoL?

## Design

GoGoL will use a front-end only design, where the logic is written in JavaScript. It will use the following frontend technologies:  
- Vanilla JS to handle the generation logic
- EaselJS to manage the grid display
- React-Redux to store the cell states and control data
- Webpack to bundle the JS into a single file

In order to simplify the calculations, the entire grid is not stored. Instead, only the cells which are alive for any given generation are stored via their cooridinates. Every game-tick, the living cells are retrieved, then the next generation is constructed based on the decided set of rules. The cells are clickable when paused, allowing the user to change the configuration.

### Major components

`grid.js`: Handles rendering of the grid, and transformation inputs (zoom, pan)
`cell.js`: The class responsible for containing state information for a single cell, and performing neighbor calculations.
`life.js`: The logic responsible for calculating the next state from the current state.

![GoGoL page wireframe](./docs/wireframes/gogol.png)

## Rules

Each cell has eight possible neighbor cells. These are the cells located directly above, below, to the left, to the right, and at all four diagonals. This is known as a Moore neighborhood, and is how cell states are calculated. A cell's next state is based on the number of living cells in it's Moore neighborhood. A dead cell with three neighbors (no more, no fewer) becomes alive (birth), and a living cell with two or three cells stays alive (survive). Any cell not part of either group is considered dead during the next generation.

These rules based off of birth and survival, which can easily be written in a special notation in the style of `Bx/Sy`, where the `B` stands for birth, and the `S` stands for survival. The `x` and `y` can be any distinct digits between 0 and 8, and represent the number of neighbors a cell must have for either condition to be true. Any dead candidate cell must have an `x` number of neighbors to be alive, and a living cell must have a `y` number of neighbors to stay alive. Using this notation, any arbitrary ruleset can be established. For example, Conway's version is denoted by the rule `B3/S23`. Allowing a user to choose their own notation is thus trivial.

## Controls

The controls are very simple, as to not overwhelm the user. The user can decide:  
- Start, Pause, Reset
- The ruleset (from some predefined sets, as well as a custom option)
- Predefined starting states
- The render speed
- The topology:
  - Infinite plane
  - Limited plane
  - Torus  

## Timeline

### Day 1: Learning and Setup

- Setup node modules, webpack, react-redux scaffolding, basic versions of major components.
- Figure out how EaselJS works and how it will be used inside of the grid component.
- Goals:
  - Get a single working bundle file
  - Use EaselJS to draw a simple object, and maybe figure out how to manipulate the canvas using the middle mouse button

### Day 2: Grids and Cells

- Build a working grid/cell model that can calculate any cell's state and its number of neighbors.
- Design Easel environment to render cells in the grid
- Goals:
  - Clickable (toggleable) grid squares.

### Day 3: Living and Dying

- Design and implement the logic that determines which cells live or die
- Provide ample access to change each setting.
- Goals:
  - Canvas shows cells living and dying (given appropriate rules)

### Day 4: Prettification and Control

- Design page and control panel
- Allow simulation to be run, paused, or reset
- Make everything pretty
- Goals:
  - Everything is pretty
  - Rules are toggleable