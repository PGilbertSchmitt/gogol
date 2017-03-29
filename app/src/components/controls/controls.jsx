import React, { Component } from 'react';
import throttle from 'lodash/throttle';

import defaultControls from '../../util/defaultControls';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = defaultControls;

    this.updateFrameTime = this.throttleMethod(
      this.updateFrameTime.bind(this),
      250
    );

    this.ping = this.throttleMethod(
      this.ping.bind(this),
      250
    );

    this.togglePlay = this.throttleMethod(
      this.togglePlay.bind(this),
      250
    );
  }

  componentDidUpdate() {
    this.props.setControls(this.state);
  }

  throttleMethod(...args) {
    const throttledMethod = throttle(...args);
    return e => {
      e.persist();
      return throttledMethod(e);
    };
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

  togglePlay() {
    let playing = !this.state.playing;
    this.setState({ playing });
  }

  mapSliderToTime(num, inMin, inMax, outMin, outMax) {
    num = Math.sqrt(num);
    inMax = Math.sqrt(inMax);
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  // Testing throttled methods
  ping() {
    console.log("ping");
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
          <label>Play/Pause
            <input
              onClick={this.togglePlay}
              type="button" />
          </label>
        </form>
      </div>
    );
  }
}

export default Controls;