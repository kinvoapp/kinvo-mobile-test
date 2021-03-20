import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './routes';

export function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}
