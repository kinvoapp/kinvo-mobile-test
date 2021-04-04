import React from 'react';
import {createSwitchNavigator}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';

import SharedStyles from './styles/shared';

import Dashboard from './pages/dashboard';
import Stocks from './pages/stocks';
import Funds from './pages/funds';
import Previdences from './pages/previdences';

const NAVIGATIONOPTIONS = {
  headerStyle: SharedStyles.stackHeader,
  headerTitleStyle: SharedStyles.stackTitle,
  cardStyle: SharedStyles.stackCard,
  headerBackImage: <Image resizeMode='contain' source={require('./images/icons/back.png')} style={{width:30, height: 30, marginLeft: 20}} />                
};

export const Main = createStackNavigator({
    Dashboard: {
      screen: Dashboard,
      navigationOptions: NAVIGATIONOPTIONS
    },
    Stocks: {
      screen: Stocks,
      navigationOptions: NAVIGATIONOPTIONS
    },
    Funds: {
      screen: Funds,
      navigationOptions: NAVIGATIONOPTIONS
    },
    Previdences: {
      screen: Previdences,
      navigationOptions: NAVIGATIONOPTIONS
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
