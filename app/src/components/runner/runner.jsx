/* This component is here to be "rerendered" everytime the controls and 
 * grid change, but isn't meant to show anything. Instead, all the logic
 * for updating the grid should rest here. I didn't know any other way to
 * create a component that reacts to changes in the redux store other than
 * to make a connected React component.
 */

import React, { Component } from 'react';

import defaultControls from '../../util/defaultControls';

class Runner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: new Map,
      controls: defaultControls,
      intervalHandler: null
    }
  }

  componentWillReceiveProps({ grid, controls }) {
    console.log("Runner received update");
    this.setState({
      grid,
      controls
    });
  }

  componentDidUpdate() {
    const controls = this.state.controls;
    
    // Play / Pause
    const handler = this.state.intervalHandler;
    if (!controls.playing && handler) {
      window.clearInterval(handler);
      this.setState({ intervalHandler: null });
    }
    if (controls.playing && !handler) {
      const newHandler = window.setInterval(this.update, 500);
      this.setState({ intervalHandler: newHandler });
    }
  }

  update() {
    console.log("beep!");
  }

  render() {
    return (<div></div>);
  }
}

export default Runner;