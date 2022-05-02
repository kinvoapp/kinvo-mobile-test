// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Desafio from './src/screens/Desafio';

// export default function App() {
//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//     <Stack.Navigator screenOptions={{headerShown: true}} >
//         <Stack.Screen name="Desafio" component={Desafio} />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import colors from './src/themes/colors';

export default function App() {
  return(
    <ThemeProvider theme={colors}>
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
    </ThemeProvider>
  );
}