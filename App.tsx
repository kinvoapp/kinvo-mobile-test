import React from 'react';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store';
import SFProDisplayBlack from './src/assets/fonts/SFProDisplay-Black.ttf'
import SFProDisplayBold from './src/assets/fonts/SFProDisplay-Bold.ttf'
import SFProDisplay from './src/assets/fonts/SFProDisplay-Regular.ttf'

export default function App() {
  const [fontsLoaded] = useFonts({
    SFProDisplayBlack,
    SFProDisplayBold,
    SFProDisplay,
  })

  if(!fontsLoaded) {
    return null;
  }

  return (

    <Provider store={store}>
      <Routes/>
    </Provider>
   
  );
}


