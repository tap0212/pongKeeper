import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from '../configureStore';

export const renderProvider = (children) => {
  const store = configureStore({}, browserHistory).store;
  return render(
    <Provider store={store}>
      <ThemeProvider
        theme={{
          main: 'violet'
        }}
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
};
