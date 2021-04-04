import React from 'react';
import {createSwitchNavigator}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';

import SharedStyles from './styles/shared';

import Dashboard from './pages/dashboard';
import Stocks from './pages/stocks';
import Funds from './pages/funds';
import Pensions from './pages/pensions';

const NAVIGATIONOPTIONS = {
  headerStyle: SharedStyles.stackHeader,
  headerTitleStyle: SharedStyles.stackTitle,
  cardStyle: SharedStyles.stackCard,
  headerBackImage: () => <Image resizeMode='contain' source={require('./images/icons/back.png')} style={{width:35, height: 35, marginLeft: 20}} />                
};

export const Main = createStackNavigator({
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {...NAVIGATIONOPTIONS, title: 'Desafio'}
    },
    Stocks: {
      screen: Stocks,
      navigationOptions: {...NAVIGATIONOPTIONS, title: 'Ações'}
    },
    Funds: {
      screen: Funds,
      navigationOptions: {...NAVIGATIONOPTIONS, title: 'Fundos'}
    },
    Pensions: {
      screen: Pensions,
      navigationOptions: {...NAVIGATIONOPTIONS, title: 'Previdências'}
    },
});

export const createRootNavigator = () => {

    return createSwitchNavigator({
        Main: {
          screen: Main
        },
      },
      {
        initialRouteName: "Main"
      },
    );
  };
