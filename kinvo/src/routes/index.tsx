import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Actions, Home } from '../pages';

import Left from '../assets/svgs/left.svg';

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
    <Challange.Screen
      options={({ navigation }) => ({
        headerTitleStyle: {
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: -20,
          marginLeft: -20,
        },

        headerLeftContainerStyle: {
          margin: 15,
          marginBottom: 30,
          marginLeft: 15,
        },
        headerLeft: () => <Left onPress={() => navigation.goBack()} />,
      })}
      name="Ações"
      component={Actions}
    />
  </Challange.Navigator>
);

export default ChallangeRoutes;
