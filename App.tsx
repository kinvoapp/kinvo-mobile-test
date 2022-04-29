import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '~/styles/themes';
import Navigation from '~/navigations';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />

      <Navigation />
    </ThemeProvider>
  );
}

export default App;
