class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  val() {
    return `${this.x},${this.y}`;
  }

  neighbors() {
    // Entire set of possibilities from moore neighborhood
    return [
      `${this.x + 1}, ${this.y + 1}`,
      `${this.x    }, ${this.y + 1}`,
      `${this.x - 1}, ${this.y + 1}`,
      `${this.x - 1}, ${this.y    }`,
      `${this.x - 1}, ${this.y - 1}`,
      `${this.x    }, ${this.y - 1}`,
      `${this.x + 1}, ${this.y - 1}`,
      `${this.x + 1}, ${this.y    }`
    ];
  }
}

export default Cell;

// for testing
window.Cell = Cell;