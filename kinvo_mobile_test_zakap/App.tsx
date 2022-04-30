/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/screens/Home';
import {Stocks} from './src/screens/Stocks';
import {Funds} from './src/screens/Funds';
import {Pension} from './src/screens/Pension';
import {RootStackParamList} from './src/models/RootStackParams';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const App = () => {

  return (
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="Home" component={Home} />
          <Screen name="Stocks" component={Stocks} />
          <Screen name="Funds" component={Funds} />
          <Screen name="Pension" component={Pension} />
        </Navigator>
      </NavigationContainer>
  );
};

export default App;
