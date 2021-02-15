import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import InvestmentFunds from '../pages/InvestmentFunds';
import PrivatePensions from '../pages/PrivatePensions';
import StockExchange from '../pages/StockExchange';
import { colors } from '../styles/colors';

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.BACKGROUND },
    }}
  >
    <Route.Screen name="Dashboard" component={Dashboard} />
    <Route.Screen name="Stock-Exchange" component={StockExchange} />
    <Route.Screen name="Investment-Funds" component={InvestmentFunds} />
    <Route.Screen name="Private-Pensions" component={PrivatePensions} />
  </Route.Navigator>
);

export default Routes;
