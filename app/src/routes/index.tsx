import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Stocks from '../pages/Stocks';
import Funds from '../pages/Funds';
import PrivatePension from '../pages/PrivatePension';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Stocks" component={Stocks} />
    <Auth.Screen name="Funds" component={Funds} />
    <Auth.Screen name="PrivatePension" component={PrivatePension} />
  </Auth.Navigator>
);

export default AuthRoutes;
