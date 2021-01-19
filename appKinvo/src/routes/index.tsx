import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../pages/HomePage';
import ScreenBackgrounds from '../pages/ScreenBackgrounds';
import ActionsScreen from '../pages/ActionsScreen';
import ScreenPredictions from '../pages/ScreenPredictions';
import PageError from '../pages/PageError';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    // desativando o header
    screenOptions={{
      headerShown: false,
      //   cardStyle: { backgroundColor: '#312e38' },
    }}>
    <Auth.Screen name="HomePage" component={HomePage} />
    <Auth.Screen name="ScreenBackgrounds" component={ScreenBackgrounds} />
    <Auth.Screen name="ActionsScreen" component={ActionsScreen} />
    <Auth.Screen name="ScreenPredictions" component={ScreenPredictions} />
    <Auth.Screen name="PageError" component={PageError} />
  </Auth.Navigator>
);

export default AuthRoutes;
