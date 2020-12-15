import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Navigation from '~/routes';
import {colors, radius, spacings} from '~/theme';
import '~/utils/helpers/icons';

const theme = {...colors, ...spacings, ...radius};

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Navigation token={false} />
    </ThemeProvider>
);

export default App;
