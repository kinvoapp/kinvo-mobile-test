import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Products from './src/pages/Products';

export const App: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <Products />
    </View>
  );
};

export default App;
