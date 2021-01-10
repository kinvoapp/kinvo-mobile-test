/* eslint-disable react/display-name */
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Founds from './screens/Founds'
import colors from './utils/colors'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Desafio"
      screenOptions={{
        headerStyle: { height: 100 },
        headerTintColor: colors.purple
      }}
    >
      <Stack.Screen
        name="Desafio"
        component={Home}
        options={{ title: 'Desafio' }}
      />
      <Stack.Screen name="Fundos" component={Founds} />
    </Stack.Navigator>
  )
}
