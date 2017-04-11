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

    this.togglePlay = this.togglePlay.bind(this);
    this.clearGrid = this.clearGrid.bind(this);
    this.playStatus = this.playStatus.bind(this);
    this.renderRules = this.renderRules.bind(this);
  }

  componentDidMount() {
    // Keyboard Controls
    document.addEventListener("keydown", e => {
      // Open to more controls
      switch (e.key) {
        case ' ':
          e.preventDefault();
          this.togglePlay();
          break;
      }
    });
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
    // Convert value from range of 1-100 into 2.0-0.02 seconds
    const val = this.mapSliderToTime(
      e.target.value,
      1,
      100,
      1.0,
      0.01
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

  playStatus() {
    return this.state.controls.playing ? "Pause" : "Play";
  }

  renderRules() {

  }

  toggleRule(i, rule) {
    return () => {
      let newControls = merge({}, this.state.controls);
      const rules = newControls.rules;
      newControls.rules[rule][i] = !rules[rule][i];
      this.setState({ controls: newControls });
    };
  }

  renderRules() {
    return (
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
          </tr>
          {this.renderRuleRow("birth")}
          {this.renderRuleRow("survive")}
        </tbody>
      </table>
    );
  }

  renderRuleRow(rule) {
    const ruleNums = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return (
      <tr key={rule}>
        <td>{rule === "birth" ? "Birth" : "Survival"}</td>
        {ruleNums.map(i => (
          <td className="check">
            <input
              type="checkbox"
              defaultChecked={this.state.controls.rules[rule][i]}
              onChange={this.toggleRule(i, rule)} />
          </td>
        ))}
      </tr>
    );
  }

  render() {
    return (
      <div className="controls">
        <h1>Controls</h1>
        <div className="controls-box">
          <div className="board-controls">
            <input
              className="primary-button u-full-width"
              onClick={this.togglePlay}
              type="button"
              value={this.playStatus()} />
            
            <br />

            <input
              className="primary-button u-full-width"
              onClick={this.clearGrid}
              type="button"
              value="Reset Grid" />
          </div>

          <div className="frame-controls">
            <label>Speed: <br />
              <input
                onChange={this.updateFrameTime}
                name="frame-slider"
                type="range"
                min="1"
                max="100"
                defaultValue="1" />
            </label>
            
            <p>Frame: {this.state.frameCount}</p>
          </div>

          <div className="rule-controls">
            {this.renderRules()}
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;