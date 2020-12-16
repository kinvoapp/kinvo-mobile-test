import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
