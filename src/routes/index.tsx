import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../pages/Dashboard';
import {Funds} from '../pages/Funds';
import {Pensions} from '../pages/Pensions';
import {Stocks} from '../pages/Stocks';

const App = createStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFF'},
      }}>
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Funds" component={Funds} />
      <App.Screen name="Pensions" component={Pensions} />
      <App.Screen name="Stocks" component={Stocks} />
    </App.Navigator>
  );
}
