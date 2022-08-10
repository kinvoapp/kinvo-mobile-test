import { Routes } from './src/routes';
import { Main } from './src/styles/global.styles';
import light from './src/theme/light';

import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

import { useFonts } from 'expo-font'
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoad, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  if (!fontsLoad) {
    console.log(error)
    return <Loading />
  }

  return (
    <Main theme={light}>
      <Routes />
    </Main>
  );
}


