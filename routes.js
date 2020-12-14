import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Challenge from './src/pages/Challenge/index';
import Stocks from './src/pages/Stocks/index';
import Funds from './src/pages/Funds/index';
import Pension from './src/pages/Pension/index';


const Stack = createStackNavigator();

export default function Router() {
  return(
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName='Desafio' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Desafio' component={Challenge} />
          <Stack.Screen name='Ações' component={Stocks} />
          <Stack.Screen name='Fundos' component={Funds} />
          <Stack.Screen name='Previdências' component={Pension} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
