import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Colors from '../constants/colors'
import HomeScreen from '../screens/Home/'
import NotFoundScreen from '../screens/NotFound/'
import Constants from 'expo-constants'

type RootStackParamList = {
  Home: undefined;
  NotFound: undefined;
};
 
 export default function Navigation() {
   return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={HomeScreen} options={{
              title:"Desafio",
              headerStyle:{
                  height: 100 + Constants.statusBarHeight,
                  borderBottomWidth:1,
              },
              headerTitleStyle: {
                  color:Colors.primary,
                  fontWeight: "bold",
                  fontSize:20,
                  borderColor:Colors.border,
              },
              headerTitleContainerStyle:{
                alignSelf:"center"
              }
          }}/>
          <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </RootStack.Navigator>
      </NavigationContainer>
   );
 }
 
 const RootStack = createStackNavigator<RootStackParamList>();
 
 