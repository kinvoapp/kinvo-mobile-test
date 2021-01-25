import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Funds from '../pages/Funds';
import Home from '../pages/Home';
import Pensions from '../pages/Pensions';
import Stocks from '../pages/Stocks';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#ecf0f2' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Stocks" component={Stocks} />
    <App.Screen name="Funds" component={Funds} />
    <App.Screen name="Pensions" component={Pensions} />
  </App.Navigator>
);

export default Routes;
