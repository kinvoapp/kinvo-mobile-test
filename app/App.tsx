import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ViewStyle, View, TextStyle, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Stocks from "./src/screens/Stocks";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/utils/navigator";
import Colors from "./src/utils/colors";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Constants from "expo-constants";
import BackButton from "./src/components/BackButton";

const Stack = createStackNavigator<RootStackParamList>();

const headerStyle: ViewStyle = {
  backgroundColor: Colors.LIGHT,
  height: 100 + Constants.statusBarHeight,
};

// TODO: Corrigir distancia entre o title e o BackButton
const headerTitleStyle: TextStyle = {
  color: Colors.PRIMARY,
  fontFamily: "Montserrat_700Bold",
  fontSize: 20,
  marginLeft: 4,
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    // TODO: LoadingScreen here!
    return <View />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle,
          headerTitleStyle,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Desafio",
          }}
        />
        <Stack.Screen
          name="Stocks"
          component={Stocks}
          options={{
            title: "Ações",
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
