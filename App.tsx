import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from '~config/theme';
import { AppRoutes } from '~routes';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <AppRoutes />
    </ThemeProvider>
  );
}
