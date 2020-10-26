import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import AccountIcon from '../../assets/accountIcon.svg';
import PremiumIcon from '../../assets/premiumIcon.svg';
import SummaryIcon from '../../assets/summaryIcon.svg';
import WalletIcon from '../../assets/walletIcon.svg';
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
          padding: 5,
        },
        tabStyle: {
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        activeTintColor: '#0fd0e2',
      }}
    >
      <Tab.Screen
        component={Summary}
        name="Resumo"
        options={{
          tabBarLabel: 'Resumo',
          tabBarIcon: ({ color, size, focused }) => (
            <SummaryIcon fill={color} width={size} focusable={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Carteira"
        component={Wallet}
        options={{
          tabBarLabel: 'Carteira',
          tabBarIcon: ({ color, size, focused }) => (
            <WalletIcon fill={color} width={size} focusable={focused} />
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
              <AntDesign name="pluscircle" size={45} color="#0fd0e2" />
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarLabel: 'Premium',
          tabBarIcon: ({ color, size, focused }) => (
            <PremiumIcon fill={color} width={size} focusable={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Account}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size, focused }) => (
            <AccountIcon fill={color} width={size} focusable={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBottom;
