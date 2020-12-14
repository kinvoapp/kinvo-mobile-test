import React from 'react';
// import {Provider} from 'mobx-react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Navigation, {routing} from '~/routes';
// import store from '~/stores';
import {colors, radius, spacings} from '~/theme';
import {Home} from '~/scenes'
import '~/utils/helpers/icons';

const theme = {...colors, ...spacings, ...radius};
// const stores = {...store, routing};

const App: React.FC = () => (
  // <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Navigation token={false} />
    </ThemeProvider>
  // </Provider>
);

export default App;
