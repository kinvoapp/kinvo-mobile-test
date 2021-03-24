import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavBackArrowIcon from "./assets/images/navigationIcons/navBackArrowIcon.svg";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ChallengeScreen from "./src/screens/Challenge";
import FundsScreen from "./src/screens/Funds";
import PensionsScreen from "./src/screens/Pensions";
import StocksScreen from "./src/screens/Stocks";
import { fonts, colors } from "./src/styles";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const Stack = createStackNavigator();

  const fetchFonts = async () => {
    await Font.loadAsync({
      "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "montserrat-semibold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "montserrat-extrabold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    });
  };

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
      <Stack.Navigator
        initialRouteName="Desafio"
        screenOptions={{
          headerTintColor: colors.primaryPurple,
          headerTitleStyle: {
            fontFamily: fonts.bold,
          },
          headerBackImage: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 24,
                height: 24,
                backgroundColor: colors.primaryPurple,
                borderRadius: 100,
              }}
            >
              <NavBackArrowIcon />
            </View>
          ),
        }}
      >
        <Stack.Screen name="Desafio" component={ChallengeScreen} />
        <Stack.Screen name="Fundos" component={FundsScreen} />
        <Stack.Screen name="Previdências" component={PensionsScreen} />
        <Stack.Screen name="Ações" component={StocksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
