import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/Feature/Containers/HomeScreen';
import ActionScreen from '../pages/Feature/Containers/ActionsScreen';
import FundsScreen from '../pages/Feature/Containers/FundsScreen';
import SocialSecurityScreen from '../pages/Feature/Containers/SocialSecurityScreen';

const AppStack = createStackNavigator();

const Routes = () => {
  return(
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#ECF0F2'
          }
        }}
      >
        <AppStack.Screen name="HomeScreen" component={HomeScreen}/>
        <AppStack.Screen name="ActionScreen" component={ActionScreen}/>
        <AppStack.Screen name="FundsScreen" component={FundsScreen}/>
        <AppStack.Screen name="SocialSecurityScreen" component={SocialSecurityScreen}/>
      </AppStack.Navigator>
  )
}

export default Routes;
