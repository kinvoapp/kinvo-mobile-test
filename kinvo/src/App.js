import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { BreadProvider } from "material-bread";

import RootNavigator from './navigators/Root'

const App = () => {
  return (
    <NavigationContainer>
      <BreadProvider>
        <RootNavigator />
      </BreadProvider>
    </NavigationContainer>
  );
}

export default App