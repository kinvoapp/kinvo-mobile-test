/* eslint-disable global-require */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

import Routes from './routes';
import { ProductStorage } from './hooks/ProductContext';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'roboto-bold': require('../assets/fonts/SFProDisplay-Black.ttf'),
//     'roboto-italic': require('../assets/fonts/SFProDisplay-Bold.ttf'),
//     'roboto-regular': require('../assets/fonts/SFProDisplay-Semibold.ttf'),
//   });
// };

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
          <StatusBar style="auto" animated />
          <Routes />
        </ProductStorage>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
