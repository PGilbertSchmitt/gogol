import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import store from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <Root store={store} />,
    root
  );
});

// For testing
window.store = store;