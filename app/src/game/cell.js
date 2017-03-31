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
      this.wrapCoordinate({ x: this.x + 1, y: this.y + 1 }),
      this.wrapCoordinate({ x: this.x, y: this.y + 1 }),
      this.wrapCoordinate({ x: this.x - 1, y: this.y + 1 }),
      this.wrapCoordinate({ x: this.x - 1, y: this.y }),
      this.wrapCoordinate({ x: this.x - 1, y: this.y - 1 }),
      this.wrapCoordinate({ x: this.x, y: this.y - 1 }),
      this.wrapCoordinate({ x: this.x + 1, y: this.y - 1 }),
      this.wrapCoordinate({ x: this.x + 1, y: this.y })
    ];
  }

  wrapCoordinate({ x, y }) {
    const newCoor = {
      x: this.bound(x, 87),
      y: this.bound(y, 60)
    };

    return newCoor;
    // return { x, y };
  }

  bound(n, lim) {
    if (n >= lim) {
      return n - lim;
    }
    if (n < 0) {
      return lim + n;
    }
    return n;
  }
}

export default Cell;

// for testing
window.Cell = Cell;