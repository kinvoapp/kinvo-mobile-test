import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '~/styles/themes';
import StockContext from './StockContext';

interface ContextsProps {
  children: React.ReactNode;
}

const Contexts: React.FC<ContextsProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />

      <StockContext>{children}</StockContext>
    </ThemeProvider>
  );
};

export default Contexts;
