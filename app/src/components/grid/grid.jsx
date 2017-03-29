import React, { Component } from 'react';

import Cell from '../../game/cell';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: props.grid || new Map,
      centerX: 0,
      centerY: 0,
      shiftX: 0,
      shiftY: 0
    };
    this.cellSize = 20;
    this.draw = this.draw.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ grid: newProps.grid }, this.draw);
  }

  componentDidMount() {
    this.canvas = document.getElementById("grid-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.draw();
  }

  draw() {
    const viewRect = document.getElementById("grid-canvas")
        .getBoundingClientRect();
    this.ctx.clearRect(0, 0, viewRect.width, viewRect.height);

    const centerX = viewRect.width / 2 - (this.cellSize / 2 + 1);
    const centerY = viewRect.height / 2 - (this.cellSize / 2 + 1);
    this.setState({ centerX, centerY });

    // this.drawLine(centerX, 0, centerX, viewRect.height);
    for (let i = 0; i < viewRect.width; i += this.cellSize) {
      this.drawLine(i, 0, i, viewRect.height);
    }

    for (let i = 0; i < viewRect.width; i += this.cellSize) {
      this.drawLine(0, i, viewRect.width, i);
    }

    // console.log(this.state.grid);
    this.state.grid.forEach(cell => {
      let x = (cell.x * this.cellSize) + centerX;
      let y = (cell.y * this.cellSize) + centerY;
      this.drawCell(x, y);
    });
  }

  drawCell(x, y) {
    const ctx = this.ctx;

    ctx.fillStyle = "#101020";
    ctx.fillRect(x, y, this.cellSize, this.cellSize);
  }

  drawLine(x1, y1, x2, y2) {
    const ctx = this.ctx;

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  handleClick(e) {
    let { top, left, width, height } = e.target.getBoundingClientRect();
    const xOffset = left + (width / 2) - (this.cellSize / 2 + 1);
    const yOffset = top + (height / 2) - (this.cellSize / 2 + 1);

    let mouseX = Math.floor((e.clientX - xOffset - 2) / this.cellSize);
    let mouseY = Math.floor((e.clientY - yOffset - 2) / this.cellSize);
    console.log(`x: ${mouseX}, y: ${mouseY}`);

    const cell = new Cell(mouseX, mouseY);
    this.props.toggle(cell);
  }

  render() {
    return (
      <div
        onLoad={() => this.draw()}
        style={{ "padding": "40px" }}>
        <canvas
          style={{ "border": "1px solid black" }}
          id="grid-canvas"
          width="500"
          height="300"
          onMouseDown={this.handleClick}>
        </canvas>
      </div>
    );
  }
}

export default Grid;