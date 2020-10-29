import React from 'react'
import { Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

import AbstractIcon from '../assets/images/abstractIcon.png';
import AddButton from '../assets/images/addButton.png';
import PremiumIcon from '../assets/images/premiumIcon.png';
import ProfileIcon from '../assets/images/profileIcon.png';
import WalletIcon from '../assets/images/walletIcon.png';

import Premium from '../screens/Premium/Premium';
import Profile from '../screens/Profile/Profile';
import Wallet from '../screens/Wallet/Wallet';
import Abstract from '../screens/Abstract/Abstract';
import Add from '../screens/Add/Add';


export default function NavigationBar() {
  return (
    <Navigator 
        initialRouteName="Carteira"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style:{ 
            height: 70,
            paddingTop: 15,
            paddingBottom: 10,
            alignItems: 'center',
          },
          tabStyle: {
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Screen 
          name="Resumo"
          component={Abstract}
          options={{
            tabBarLabel: 'Resumo',
            tabBarIcon: () => (
              <Image source={AbstractIcon}/>
            ),
          }}
        />
        <Screen
          name="Carteira" 
          component={Wallet}
          options={{
            tabBarLabel: 'Carteira',
            tabBarIcon: () => (
              <Image source={WalletIcon}/>
            ),
          }}
       />
        <Screen
          name="Add" 
          component={Add}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={AddButton}/>
            ),
          }}
        />
        <Screen 
          name="Premium" 
          component={Premium}
          options={{
            tabBarLabel: 'Premium',
            tabBarIcon: () => (
              <Image source={PremiumIcon}/>
            ),
          }}
        />
        <Screen 
          name="Conta" 
          component={Profile}
          options={{
            tabBarLabel: 'Conta',
            tabBarIcon: () => (
              <Image source={ProfileIcon}/>
            ),
          }}
       />
      </Navigator>
  )
}
