import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ChallengeScreen from "./src/screens/Challenge";
import FundsScreen from "./src/screens/Funds";
import PensionsScreen from "./src/screens/Pensions";
import StocksScreen from "./src/screens/Stocks";

const fetchFonts = async () => {
  await Font.loadAsync({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-semi-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-extra-bold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const Stack = createStackNavigator();
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Desafio">
        <Stack.Screen name="Desafio" component={ChallengeScreen} />
        <Stack.Screen name="Fundos" component={FundsScreen} />
        <Stack.Screen name="Previdências" component={PensionsScreen} />
        <Stack.Screen name="Ações" component={StocksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
