import React,{FC, ReactElement, useState} from 'react';
import Navigation from './navigation/'
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading"
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

const fetchFonts = async () => {
  const [dataLoaded, setDataLoaded] = useState(false)

  // if(!AppLoading){
  //   return (
  //     <AppLoading 
  //             startAsync={fetchFonts} 
  //             onFinish={() => setDataLoaded(true)}
  //             onError={(err : string)=>console.log(err)}
  //           />
  //   )
  // }

  return await Font.loadAsync({
    'montserrat-bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-semibold' : require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-medium' : require('./assets/fonts/Montserrat-Medium.ttf'),
  });
}

const App : FC = () => {
  fetchFonts()
  return (
    <Navigation/>
  );
}

export default App
