import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={() => <View />} />
      <Stack.Screen name="Stocks" component={() => <View />} />
      <Stack.Screen name="Funds" component={() => <View />} />
      <Stack.Screen name="Pension" component={() => <View />} />
    </Stack.Navigator>
  );
};

export default Router;
