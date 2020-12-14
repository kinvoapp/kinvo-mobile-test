import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';
import Theme from './styles/theme/default';

const App: React.FC = () => {
  return (
    <Theme>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </Theme>
  );
};

export default App;
