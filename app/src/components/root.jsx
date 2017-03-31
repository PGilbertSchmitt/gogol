import React from 'react';
import { Provider } from 'react-redux';

import Grid from '../components/grid/grid-container';
import Controls from '../components/controls/controls-container';
import Runner from '../components/runner/runner-container';
import Splash from '../components/splash';

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="root-page">
      <Splash />
      <div className="game-section">
        <Controls />
        <Grid />
      </div>
      <Runner />
    </ div>
  </Provider>
);

export default Root;