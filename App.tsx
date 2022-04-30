import React from 'react';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';


import THEME from './src/theme';

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic
} from '@expo-google-fonts/montserrat';

import { Home } from './src/screens/home'
import { HomeAction } from './src/screens/Ações';




export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={THEME}>
       <Home />
    </ThemeProvider>
  );
}
