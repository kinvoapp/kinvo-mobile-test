import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import TopBar from './components/TopBar';
import Search from './components/Search';

export const App: React.FC = () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <TopBar />
      <Search />
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
