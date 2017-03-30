class Cell {
  constructor(x, y, state = 1) {
    this.x = x;
    this.y = y;
    this.state = state;
  }

  val() {
    return `${this.x},${this.y}`;
  }

  neighbors() {
    // Entire set of possibilities from moore neighborhood
    return [
      { x: this.x + 1, y: this.y + 1},
      { x: this.x    , y: this.y + 1},
      { x: this.x - 1, y: this.y + 1},
      { x: this.x - 1, y: this.y    },
      { x: this.x - 1, y: this.y - 1},
      { x: this.x    , y: this.y - 1},
      { x: this.x + 1, y: this.y - 1},
      { x: this.x + 1, y: this.y    }
    ];
  }
}

export default Cell;

// for testing
window.Cell = Cell;