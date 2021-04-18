import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as Font from 'expo-font';
import { MSFontList } from './assets/fonts/montserrat-fontlist';
import AppRouter from './assets/router/Router';
import { DEFAULT_PURPLE } from './assets/constants/colors';
import { Spinner } from './components/common/Spinner';

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync(MSFontList);
      setIsFontLoaded(true);
    };

    loadFont();
  }, []);

  return isFontLoaded ? <AppRouter /> : <Spinner />;
};

export default App;
