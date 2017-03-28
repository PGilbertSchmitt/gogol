import React, { Component } from 'react';

const createjs = window.createjs;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: props.grid
    };
    this.init = this.init.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ grid: newProps.grid });
  }

  draw() {
    let stage = new createjs.Stage("grid-canvas");
  }

  render() {
    return (
      <div onLoad={this.draw()}>
        <canvas id="grid-canvas" width="500" height="300"></canvas>
      </div>
    );
  }
}

export default Grid;