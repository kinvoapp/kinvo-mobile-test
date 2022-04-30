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
import {Shares} from './src/screens/Shares';
import {SocialSecurity} from './src/screens/SocialSecurity';
import {RootStackParamList} from './src/screens/RootStackParams';
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
          <Screen name="Shares" component={Shares} />
          <Screen name="SocialSecurity" component={SocialSecurity} />
        </Navigator>
      </NavigationContainer>
  );
};

export default App;
