import React from 'react';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import App from '../components/App'
import { Image } from 'react-native'
import CarteiraRoute from './CarteiraRoute'








const ContainerRoutes = createAppContainer(
  createBottomTabNavigator({
    Resumo: { 
      screen: () => null,
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
      screen: App,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/plus.png')} />
      }
    },
    Premium: {
      screen: () => null,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/premium.png')} />
      }
    },
    Conta: {
      screen: () => null,
      navigationOptions: {
        tabBarLabel: <Image source={require('../imagens/conta.png')} />
      }
    },



  },
    {
      initialRouteName: 'Carteira',
      tabBarPosition: 'top',
      tabBarOptions:{
        style:{height:60 },
      }
    },
    

  )
);



export default ContainerRoutes;