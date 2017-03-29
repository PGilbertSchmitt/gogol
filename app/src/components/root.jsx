import React from 'react';
import { Provider } from 'react-redux';

import Grid from '../components/grid/grid-container';
import Controls from '../components/controls/controls-container';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Controls />
      <Grid />
    </ div>
  </Provider>
);

export default Root;