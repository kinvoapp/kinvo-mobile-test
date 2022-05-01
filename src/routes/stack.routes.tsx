import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Welcome} from '../pages/Welcome';
import {Home} from '../pages/Home';
import {Stocks} from '../pages/Stocks';
import {Funds} from '../pages/Funds';
import {Pension} from '../pages/Pension';

import colors from '../styles/colors';

const StackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.white,
      },
    }}>
    <StackRoutes.Screen name="Welcome" component={Welcome} />
    <StackRoutes.Screen name="Home" component={Home} />
    <StackRoutes.Screen name="Stocks" component={Stocks} />
    <StackRoutes.Screen name="Funds" component={Funds} />
    <StackRoutes.Screen name="Pension" component={Pension} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
