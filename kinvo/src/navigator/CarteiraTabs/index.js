import React from "react";
import Products from "../../pages/ProductPage";
import { createMaterialTopTabNavigator } from "react-navigation";
import TabBar from "./components/TabBar";
import styles from "./styles";

const CarteiraRoute = createMaterialTopTabNavigator(
  {
    Carteira: {
      screen: () => null
    },
    Produtos: {
      screen: Products
    },
    Extrato: {
      screen: () => null
    }
  },
  {
    tabBarComponent: TabBar,
    initialRouteName: "Produtos",
    tabBarOptions: {
      upperCaseLabel: false,
      style: styles.tabBarStyle,
      labelStyle: styles.labelStyle,
      activeTintColor: "#707B81",
      inactiveTintColor: "#707B81",
      indicatorStyle: styles.indicatorStyle,
      tabStyle: styles.tabStyle
    }
  }
);

export default CarteiraRoute;
