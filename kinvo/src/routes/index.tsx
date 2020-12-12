import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Actions from '../pages/Actions';

const Challange = createStackNavigator();

const ChallangeRoutes: React.FC = () => (
  <Challange.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#6F4DBF',

      headerStatusBarHeight: 25,
      headerTitleStyle: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: -25,
      },
      cardStyle: { backgroundColor: '#ECF0F2' },
    }}
  >
    <Challange.Screen name="Desafio" component={Home} />
    <Challange.Screen name="Actions" component={Actions} />
  </Challange.Navigator>
);

export default ChallangeRoutes;
