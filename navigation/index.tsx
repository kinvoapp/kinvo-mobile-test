import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import colors from '../constants/colors'
import HomeScreen from '../screens/Home/'
import FundScreen from '../screens/Fund/'
import StockScreen from '../screens/Stocks/'
import PensionScreen from '../screens/Pension'
import LoadingScreen from '../screens/Loading'

import Constants from 'expo-constants'

type RootStackParamList = {
  Home: undefined,
  Loading: undefined,
  Stock: undefined,
  Fund: undefined,
  Pension: undefined,
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
          <RootStack.Screen name="Pension" component={PensionScreen} options={{
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
          <RootStack.Screen name="Loading" component={LoadingScreen} options={{ title: 'Oops!' }} />
        </RootStack.Navigator>
      </NavigationContainer>
   );
 }
 
 const RootStack = createStackNavigator<RootStackParamList>();
 
 