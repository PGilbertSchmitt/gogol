/* This component is here to be "rerendered" everytime the controls and 
 * grid change, but isn't meant to show anything. Instead, all the logic
 * for updating the grid should rest here. I didn't know any other way to
 * create a component that reacts to changes in the redux store other than
 * to make a connected React component.
 */

import React, { Component } from 'react';

class Runner extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    console.log("Runner received update");
  }

  render() {
    return (<div></div>);
  }
}

export default Runner;