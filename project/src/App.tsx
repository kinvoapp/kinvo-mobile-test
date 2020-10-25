import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { ProductStorage } from './hooks/ProductContext';

export const App: React.FC = () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <ProductStorage>
        <StatusBar style="auto" animated />
        <Routes />
      </ProductStorage>
    </SafeAreaView>
  </NavigationContainer>
);

export default registerRootComponent(App);
