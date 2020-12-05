import React from 'react';

import Home from '../screens/Home';
import Stocks from '../screens/Stocks';
import Funds from '../screens/Funds';
import Pension from '../screens/Pension';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Stocks" component={Stocks} />
      <Stack.Screen name="Funds" component={Funds} />
      <Stack.Screen name="Pension" component={Pension} />
    </Stack.Navigator>
  );
};

export default Router;
