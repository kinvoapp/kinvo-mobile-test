import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const WidthTab = (Dimensions.get("screen").width / 3) * 0.85;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    elevation: 0
  },
  tabStyle: {
    justifyContent: "center",
    width: WidthTab
  },
  indicatorStyle: {
    backgroundColor: "#F5F8FA",
    height: 50,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    width: WidthTab
  },
  labelStyle: {
    fontSize: 16
  }
});

export default styles;
