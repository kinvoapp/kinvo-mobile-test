import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import colors from '../constants/colors'
import HomeScreen from '../screens/Home/'
import FundScreen from '../screens/Fund/'
import StockScreen from '../screens/Stocks/'
import ForesightScreen from '../screens/Foresight/'
import NotFoundScreen from '../screens/NotFound/'

import Constants from 'expo-constants'

type RootStackParamList = {
  Home: undefined,
  NotFound: undefined,
  Stock: undefined,
  Fund: undefined,
  Foresight: undefined,
};
//TODO estilizar o botão de boltar do header


// TODO isolar o options
// const options = {
//             title:"Desafio",
//             headerStyle:{
//                 height: 100 + Constants.statusBarHeight,
//                 borderBottomWidth:1,
//             },
//             headerTitleStyle: {
//                 color:colors.primary,
//                 fontWeight: "bold",
//                 fontSize:20,
//                 borderColor:colors.border,
//             },
//             headerTitleContainerStyle:{
//               alignSelf:"center"
//   }
// }
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
                color:colors.primary,
                fontWeight: "bold",
                fontSize:20,
                borderColor:colors.border,
            },
            headerTitleContainerStyle:{
              alignSelf:"center",
            }
          }}/>
          <RootStack.Screen name="Stock" component={StockScreen} options={{
            title:"Ações",
            headerStyle:{
                height: 100 + Constants.statusBarHeight,
                borderBottomWidth:1,
            },
            headerTitleStyle: {
                color:colors.primary,
                fontWeight: "bold",
                fontSize:20,
                borderColor:colors.border,
            },
            headerTitleContainerStyle:{
              alignSelf:"center"
            }
          }}/>
          <RootStack.Screen name="Fund" component={FundScreen} options={{
            title:"Fundos",
            headerStyle:{
                height: 100 + Constants.statusBarHeight,
                borderBottomWidth:1,
            },
            headerTitleStyle: {
                color:colors.primary,
                fontWeight: "bold",
                fontSize:20,
                borderColor:colors.border,
            },
            headerTitleContainerStyle:{
              alignSelf:"center"
              }
            }}/>
          <RootStack.Screen name="Foresight" component={ForesightScreen} options={{
            title:"Previdência",
            headerStyle:{
                height: 100 + Constants.statusBarHeight,
                borderBottomWidth:1,
            },
            headerTitleStyle: {
                color:colors.primary,
                fontWeight: "bold",
                fontSize:20,
                borderColor:colors.border,
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
 
 