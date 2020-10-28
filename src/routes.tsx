import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import NavigationBar from './components/NavigationBar'



function Routes() {
  return (
    <NavigationContainer>
      <NavigationBar/>
    </NavigationContainer>
  );
}

export default Routes;