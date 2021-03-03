import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import {StyleSheet, View, Image } from 'react-native';
import Home from './screens/Home.js';
import Acoes from './screens/Acoes.js';
import Fundos from './screens/Fundos.js';
import Previdencias from './screens/Previdencias.js';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFF',
                    height: 100
                },
                headerBackImage: ()=>(
                <View style={styles.headerBackImg}>
                    <Image source={require('./assets/btn-back.png')} />
                </View>),
                headerTitleStyle: styles.headerTitle,
                headerLeftContainerStyle: styles.leftContainer
            }}
            >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Desafio' }} />
        <Stack.Screen name="Acoes" component={Acoes} options={{title: 'Ações'}}/>
        <Stack.Screen name="Fundos" component={Fundos} options={{title: 'Fundos'}}/>
        <Stack.Screen name="Previdencias" component={Previdencias} options={{title: 'Previdências'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  leftContainer:{
    alignItems: 'center',
    marginLeft:10
  },
  headerTitle:{
    fontFamily: 'montserrat-bold',
    color: '#6F4DBF',
    fontSize: 20
  },
  headerBackImg: {
    backgroundColor:'#6F4DBF',
    justifyContent: 'center',
    alignItems: 'center',
    width:30,
    height:30,
    padding:5,
    borderRadius:50/2
  }
})
export default App;