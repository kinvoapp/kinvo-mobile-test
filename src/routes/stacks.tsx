import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  Actions,
  Funds,
  Predictions
} from '~/scenes';
import { RoutesPublic } from './routing';

const Public = createStackNavigator();

export const PublicStack = (): React.ReactElement => (
  <Public.Navigator headerMode="none" initialRouteName={RoutesPublic.HOME}>
    <Public.Screen
      name={RoutesPublic.HOME}
      component={Home}
    />
    <Public.Screen
      name={RoutesPublic.ACTIONS}
      component={Actions}
    />
    <Public.Screen
      name={RoutesPublic.FUNDS}
      component={Funds}
    />
    <Public.Screen
      name={RoutesPublic.PREDICTIONS}
      component={Predictions}
    />
  </Public.Navigator>
);
