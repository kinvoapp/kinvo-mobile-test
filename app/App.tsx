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
import { Stock } from "./src/utils/apiTypes";
import { Context, useContextState } from "./src/services/context";
import Loading from "./src/screens/Loading";

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
  const contextState = useContextState();

  if (!fontsLoaded) {
    // TODO: LoadingScreen here!
    return <Loading />;
  }
  return (
    <Context.Provider value={contextState}>
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
            options={({ navigation }) => ({
              title: "Ações",
              headerLeft: () => (
                <BackButton onPress={() => navigation.goBack()} />
              ),
            })}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Context.Provider>
  );
}
