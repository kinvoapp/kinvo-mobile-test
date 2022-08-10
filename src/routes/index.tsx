import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DesafioScreen, AcoesScreens } from '~screens';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DesafioScreen" component={DesafioScreen} />
        <Stack.Screen name="AcoesScreens" component={AcoesScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
