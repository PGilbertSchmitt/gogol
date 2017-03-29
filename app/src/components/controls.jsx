import React, { Component } from 'react';

import defaultControls from '../util/defaultControls';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = defaultControls;

    this.updateFrameTime = this.updateFrameTime.bind(this);
  }

  updateFrameTime(e) {
    // Convert value from range of 1-100 into 2.0-.02;
    const val = this.mapSliderToTime(
      e.target.value,
      1,
      100,
      2.0,
      0.02
    );
    this.setState({ frameTime: val });
  }

  mapSliderToTime(num, inMin, inMax, outMin, outMax) {
    num = Math.sqrt(num);
    inMax = Math.sqrt(inMax);
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  render() {
    return (
      <div>
        <h1>Controls</h1>
        <form>
          <label>Time between frame: <br />
            <input
              onChange={this.updateFrameTime}
              name="frame-slider"
              type="range"
              min="1"
              max="100" />
            </label>
          </form>
          
      </div>
    );
  }
}

export default Controls;