import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import history from './utils/history';

import App from './containers/app';
import configureStore from './configureStore';
// Create redux store with history
const initialState = {};
const { store, persistor } = configureStore(initialState, history);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
