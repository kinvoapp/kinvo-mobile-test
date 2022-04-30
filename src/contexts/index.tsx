import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '~/styles/themes';
import FundContext from './FundContext';
import PensionContext from './PensionContext';
import StockContext from './StockContext';

interface ContextsProps {
  children: React.ReactNode;
}

const Contexts: React.FC<ContextsProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />

      <PensionContext>
        <FundContext>
          <StockContext>{children}</StockContext>
        </FundContext>
      </PensionContext>
    </ThemeProvider>
  );
};

export default Contexts;
