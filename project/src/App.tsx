/* eslint-disable global-require */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { ProductStorage } from './hooks/ProductContext';
import { theme } from './styles/global';

export const App: React.FC = () => {
  useEffect(() => {
    Font.loadAsync({
      'SFProDisplay-Black': require('../assets/fonts/SFProDisplay-Black.ttf'),
      'SFProDisplay-Bold': require('../assets/fonts/SFProDisplay-Bold.ttf'),
    });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <ProductStorage>
          <ThemeProvider theme={theme}>
            <StatusBar style="auto" animated />
            <Routes />
          </ThemeProvider>
        </ProductStorage>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
