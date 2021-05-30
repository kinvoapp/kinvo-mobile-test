import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import colors from "../constants/colors";
import HomeScreen from "../screens/Home/";
import FundScreen from "../screens/Fund/";
import StockScreen from "../screens/Stocks/";
import PensionScreen from "../screens/Pension";
import BackButton from "../assets/icons/backButtonIcon.svg"

import Constants from "expo-constants";

export type RootStackParamList = {
  Home: undefined;
  Loading: undefined;
  Stock: undefined;
  Fund: undefined;
  Pension: undefined;
};
//TODO estilizar o botão de voltar do header

const options: StackNavigationOptions = {
  title: "Desafio",
  headerBackImage: ()=> (<BackButton/>),
  headerStyle: {
    height: 100 + Constants.statusBarHeight,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    borderColor: colors.border,
  },
  headerTitleContainerStyle: {
    alignSelf: "center",
  },
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={options}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen
          name="Stock"
          component={StockScreen}
          options={{ title: "Ações" }}
        />
        <RootStack.Screen
          name="Fund"
          component={FundScreen}
          options={{ title: "Fundos" }}
        />
        <RootStack.Screen
          name="Pension"
          component={PensionScreen}
          options={{ title: "Previdência" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const RootStack = createStackNavigator<RootStackParamList>();
