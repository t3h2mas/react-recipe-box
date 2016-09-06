import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './containers/AppContainer';
import reducer from './reducers/index';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

const wrappedReducer = storage.reducer(reducer);
const engine = createEngine('recipe-box');
const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(wrappedReducer, window.devToolsExtension && window.devToolsExtension());

const load = storage.createLoader(engine);
load(store);


const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
