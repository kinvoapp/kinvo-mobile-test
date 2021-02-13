import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Funds from '../pages/Funds';
import Forecasts from '../pages/Forecasts';
import Stock from '../pages/Stock';

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#ECF0F2' },
    }}
  >
    <Route.Screen name="Dashboard" component={Dashboard} />
    <Route.Screen name="Funds" component={Funds} />
    <Route.Screen name="Forecasts" component={Forecasts} />
    <Route.Screen name="Stock" component={Stock} />
  </Route.Navigator>
);

export default Routes;
