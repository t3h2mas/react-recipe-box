import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './containers/AppContainer';
import recipeApp from './reducers/Reducer';

const store = createStore(recipeApp);

const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
