// MARK: React
import React from 'react';

// MARK: Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengePage from '../pages/challenge';
import StockPage from '../pages/stock';
import FundPage from '../pages/fund';
import PensionPage from '../pages/pension';

// MARK: Stores

// MARK: pages

// MARK: Implementation
const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Challenge" component={ChallengePage} />
      <Stack.Screen name="Stock" component={StockPage} />
      <Stack.Screen name="Fund" component={FundPage} />
      <Stack.Screen name="Pension" component={PensionPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
