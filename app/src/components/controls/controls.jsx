import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import defaultControls from '../../util/defaultControls';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = defaultControls;

    this.updateFrameTime = this.debounceMethod(
      this.updateFrameTime.bind(this),
      250
    );

    this.ping = this.debounceMethod(
      this.ping.bind(this),
      250
    );

    this.togglePlay = this.debounceMethod(
      this.togglePlay.bind(this),
      250
    );
  }

  componentDidUpdate() {
    this.props.setControls(this.state);
  }

  debounceMethod(...args) {
    const debouncedMethod = debounce(...args);
    return e => {
      e.persist();
      return debouncedMethod(e);
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

  // Testing debounced methods
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
              max="100"
              defaultValue="1"  />
          </label>
          <br />
          <input
            onClick={this.togglePlay}
            type="button"
            value="Play/Pause" />
          <br />
          <input
            onClick={this.props.cleanGrid}
            type="button"
            value="Reset Grid" />
        </form>
      </div>
    );
  }
}

export default Controls;