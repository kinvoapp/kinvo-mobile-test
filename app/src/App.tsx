import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, height: 100, backgroundColor: '#000' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
