import React, { Component } from 'react';
import { debounce, merge } from 'lodash';

import defaultControls from '../../util/defaultControls';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: defaultControls,
      frameCount: 0
    };

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

    this.clearGrid = this.clearGrid.bind(this);
    this.playStatus = this.playStatus.bind(this);
    this.renderRules();
  }

  componentWillReceiveProps({ frameCount }) {
    this.setState({ frameCount });
  }

  componentDidUpdate() {
    this.props.setControls(this.state.controls);
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
      1.0,
      0.02
    );
    let controls = merge({}, this.state.controls);
    controls.frameTime = val;
    this.setState({ controls });
  }

  togglePlay() {
    let controls = merge({}, this.state.controls);
    controls.playing = !controls.playing;
    this.setState({ controls });
  }

  clearGrid() {
    this.props.cleanGrid();
    this.props.resetCount();
    let controls = merge({}, this.state.controls);
    controls.playing = false;
    this.setState({ controls });
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

  playStatus() {
    return this.state.controls.playing ? "Pause" : "Play";
  }

  renderRules() {
    const newRules = this.state.controls.rules;

    return (
      <table>
        <thead>
          <tr>
            <th># of neighbors</th>
            <th>Birth</th>
            <th>Survival</th>
          </tr>
        </thead>
        <tbody>
          {[0,1,2,3,4,5,6,7,8].map(i => this.renderRuleRow(i))}
        </tbody>
      </table>
    );
  }

  renderRuleRow(i) {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>
          <input 
            type="checkbox"
            defaultChecked={this.state.controls.rules.birth[i]}
            onChange={this.toggleRule(i, "birth")} />
        </td>
        <td>
          <input 
            type="checkbox"
            defaultChecked={this.state.controls.rules.survive[i]}
            onChange={this.toggleRule(i, "survive")} />
        </td>
      </tr>
    );
  }

  toggleRule(i, rule) {
    return () => {
      let newControls = merge({}, this.state.controls);
      const rules = newControls.rules;
      newControls.rules[rule][i] = !rules[rule][i];
      this.setState({ controls: newControls });
    };
  }

  render() {
    return (
      <div>
        <h1>Controls</h1>
        <label>Speed: <br />
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
          value={this.playStatus()} />
        <p>Frame: {this.state.frameCount}</p>
        <br />
        <input
          onClick={this.clearGrid}
          type="button"
          value="Reset Grid" />
        {this.renderRules()}
      </div>
    );
  }
}

export default Controls;