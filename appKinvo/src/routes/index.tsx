import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import ScreenBackgrounds from '../pages/ScreenBackgrounds';
import ActionsScreen from '../pages/ActionsScreen';
import ScreenPredictions from '../pages/ScreenPredictions';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Auth.Screen name="HomePage" component={HomePage} />
    <Auth.Screen name="ScreenBackgrounds" component={ScreenBackgrounds} />
    <Auth.Screen name="ActionsScreen" component={ActionsScreen} />
    <Auth.Screen name="ScreenPredictions" component={ScreenPredictions} />
  </Auth.Navigator>
);

export default AuthRoutes;
