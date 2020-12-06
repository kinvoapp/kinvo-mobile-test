import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import colors from './src/assets/colors';

import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
