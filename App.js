import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Stocks from './src/screens/Stocks';
import Funds from './src/screens/Funds';
import Pension from './src/screens/Pension';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Ações"
        onPress={() => navigation.navigate('Ações')}
      />
      <Button
        title="Fundos"
        onPress={() => navigation.navigate('Fundos')}
      />
      <Button
        title="Previdência"
        onPress={() => navigation.navigate('Previdência')}
      />
    </View>
  );
}

function StocksScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stocks/>
    </View>
  );
}

function FundsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Funds/>
    </View>
  );
}

function PensionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pension/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Desafio">
        <Stack.Screen name="Desafio" component={HomeScreen} />
        <Stack.Screen name="Ações" component={StocksScreen} />
        <Stack.Screen name="Fundos" component={FundsScreen} />
        <Stack.Screen name="Previdência" component={PensionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;