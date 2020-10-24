import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Wallet from '../pages/Wallet';
import Summary from '../pages/Summary';
import Premium from '../pages/Premium';
import Account from '../pages/Account';

const Tab = createBottomTabNavigator();

const TabBottom: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Carteira"
      tabBarOptions={{
        style: {
          height: 60,
          padding: 8,
        },
        tabStyle: {
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          alignItems: 'center',
          margin: 0,
        },
        activeTintColor: '#0fd0e2',
      }}
    >
      <Tab.Screen
        component={Summary}
        name="Resumo"
        options={{
          tabBarLabel: 'Resumo',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="upcircle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carteira"
        component={Wallet}
        options={{
          tabBarLabel: 'Carteira',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="upcircle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="plusButton"
        component={Wallet}
        options={{
          tabBarLabel: '',
          tabBarButton: () => (
            <TouchableWithoutFeedback>
              <AntDesign name="upcircle" size={40} color="#0fd0e2" />
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarLabel: 'Premium',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="upcircle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Account}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="upcircle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBottom;
