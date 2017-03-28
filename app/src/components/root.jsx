import React from 'react';
import { Provider } from 'react-redux';

import Grid from '../components/grid-container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Grid />
  </Provider>
);

export default Root;