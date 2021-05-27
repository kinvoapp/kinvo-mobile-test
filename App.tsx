import React,{FC, ReactElement, useState} from 'react';
import Navigation from './navigation/'
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading"
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

const fetchFonts = () => {
  const [dataLoaded, setDataLoaded] = useState(false)

  return Font.loadAsync({
    'montserrat-bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-semibold' : require('./assets/fonts/Montserrat-SemiBold.ttf')
  });
}

const App : FC = () => {
  fetchFonts()
  return (
    <Navigation/>
  );
}

export default App
