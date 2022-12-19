import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from '~config/theme';
import { store } from './src/store';
import { AppRoutes } from '~routes';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}
