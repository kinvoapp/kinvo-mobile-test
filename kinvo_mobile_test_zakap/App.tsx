import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {StocksScreen} from './src/screens/StocksScreen';
import {FundsScreen} from './src/screens/FundsScreen';
import {PensionScreen} from './src/screens/PensionScreen';
import {RootStackParamList} from './src/models/RootStackParams';
import 'react-native-gesture-handler';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const App = () => {

  return (
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="HomeScreen" component={HomeScreen} />
          <Screen name="StocksScreen" component={StocksScreen} />
          <Screen name="FundsScreen" component={FundsScreen} />
          <Screen name="PensionScreen" component={PensionScreen} />
        </Navigator>
      </NavigationContainer>
  );
};

export default App;
