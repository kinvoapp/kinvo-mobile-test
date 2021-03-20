import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Dashboard} from '../pages/Dashboard';
import {Funds} from '../pages/Funds';
import {Pensions} from '../pages/Pensions';
import {Stocks} from '../pages/Stocks';

const App = createStackNavigator();

const Slide = {
  ...TransitionPresets.SlideFromRightIOS,
};

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFF'},
        animationTypeForReplace: 'push',
      }}>
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen options={Slide} name="Funds" component={Funds} />
      <App.Screen options={Slide} name="Pensions" component={Pensions} />
      <App.Screen options={Slide} name="Stocks" component={Stocks} />
    </App.Navigator>
  );
}
