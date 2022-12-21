import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ChallengeScreen,
  StocksScreen,
  PensionScreen,
  FundsScreen,
} from '~screens';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ChallengeScreen" component={ChallengeScreen} />
        <Stack.Screen name="StocksScreen" component={StocksScreen} />
        <Stack.Screen name="PensionScreen" component={PensionScreen} />
        <Stack.Screen name="FundsScreen" component={FundsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
