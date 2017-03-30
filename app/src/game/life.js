import Cell from './cell';

class Life {
  constructor(grid, birth = {}, survive = {}, evolve = {}) {
    this.grid = grid;
    this.birth = birth;
    this.survive = survive;
    this.evolve = evolve;
  }

  generate() {
    let newGrid = new Map;

    // Birth
    const deadNeighborGrid = this.deadNeighbors(this.grid);
    deadNeighborGrid.forEach(cell => {
      const possibleNeighbors = cell.neighbors();
      console.log(cell);
      console.log(possibleNeighbors);
      const count = this.neighborCount(possibleNeighbors);
      if (this.birth[count]) {
        newGrid.set(cell.val(), cell);
      }
    });

    // Survive
    this.grid.forEach(cell => {
      const possibleNeighbors = cell.neighbors();
      const count = this.neighborCount(possibleNeighbors);
      if (this.survive[count]) {
        newGrid.set(cell.val(), cell);
      }
    });

    return newGrid;
  }

  deadNeighbors(grid) {
    let deadNeighborGrid = new Map;
    grid.forEach(cell => {
      const neighbors = cell.neighbors();
      neighbors.forEach(coor => {
        const str = this.pairToStr(coor);
        if (!grid.has(str)) {
          deadNeighborGrid.set(str, new Cell(coor.x, coor.y, 0));
        }
      });
    });
    return deadNeighborGrid;
  }

  neighborCount(possibleNeighbors) {
    let count = 0;
    possibleNeighbors.forEach(coor => {
      if (this.grid.has(this.pairToStr(coor))) {
        count++;
      }
    });
    return count;
  }

  pairToStr({ x, y }) {
    return `${x},${y}`;
  }
}

export default Life;

window.Life = Life;