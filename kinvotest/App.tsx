import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { MSFontList } from './assets/fonts/montserrat-fontlist';
import AppRouter from './assets/router/Router';
import { Spinner } from './components/common/Spinner';

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync(MSFontList);
        setIsFontLoaded(true);
      } catch (error) {
        console.error(`Erro ao carregar as fontes da aplicação.`);
      }
    })();
  }, []);

  return isFontLoaded ? <AppRouter /> : <Spinner />;
};

export default App;
