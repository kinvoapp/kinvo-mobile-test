import React from "react";
import { StatusBar } from "react-native";

import { createAppContainer, SafeAreaView } from "react-navigation";
import Routes from "./navigator/routes";

const AppNavigator = Routes;
const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <AppContainer/>
  </SafeAreaView>
);

export default App;
