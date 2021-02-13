import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={{ flex: 1, backgroundColor: '#ECF0F2' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
