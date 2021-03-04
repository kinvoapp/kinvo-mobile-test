import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Routes
import MainStackScreen from '~/routes/MainStack';

const App = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

export default App;
