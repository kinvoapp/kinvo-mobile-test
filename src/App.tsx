import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import Theme from './styles/theme/default';

const App: React.FC = () => {
  return (
    <Theme>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Theme>
  );
};

export default App;
