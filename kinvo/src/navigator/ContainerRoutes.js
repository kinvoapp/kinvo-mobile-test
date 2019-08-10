import React from 'react';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native'
import CarteiraRoute from './CarteiraRoute'
import Working from '../components/Working'








const ContainerRoutes = createAppContainer(
  createBottomTabNavigator({
    Resumo: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/resumo.png')} />
      }
    },
    Carteira: {
      screen: CarteiraRoute,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/carteira.png')} />
      }
    },
    Plus: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/plus.png')} />
      }
    },
    Premium: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/premium.png')} />
      }
    },
    Conta: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/conta.png')} />
      }
    },



  },
    {
      initialRouteName: 'Carteira', 
      tabBarOptions: {
        style: { height: 70, paddingBottom: 5 },
      }
    },


  )
);



export default ContainerRoutes;