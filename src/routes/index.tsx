import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DesafioScreen, AcoesScreen } from '~screens';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DesafioScreen" component={DesafioScreen} />
        <Stack.Screen name="AcoesScreen" component={AcoesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
