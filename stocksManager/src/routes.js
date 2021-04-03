import React from 'react';
import {createSwitchNavigator}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Dashboard from './pages/Dashboard';

export const Main = createStackNavigator({
    Dashboard: {
      screen: Dashboard,
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
