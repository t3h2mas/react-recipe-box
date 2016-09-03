import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './containers/AppContainer';
import reducer from './reducers/index';

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
