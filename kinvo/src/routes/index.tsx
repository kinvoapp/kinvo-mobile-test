import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Actions, Home } from '../pages';

const Challange = createStackNavigator();

const ChallangeRoutes: React.FC = () => (
  <Challange.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#6F4DBF',

      headerStatusBarHeight: 20,
      headerTitleStyle: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: -20,
      },
      cardStyle: { backgroundColor: '#ECF0F2' },
    }}
  >
    <Challange.Screen name="Desafio" component={Home} />
    <Challange.Screen name="Ações" component={Actions} />
  </Challange.Navigator>
);

export default ChallangeRoutes;
