import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialTopTabBar } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

export default function Presentational(props) {
  const renderBackButton = () => {
    return (
      <TouchableOpacity style={styles.backButtonStyle} onPress={() => {}}>
        <Icon name="arrow-back" color="#9DA5AC" size={30} />
      </TouchableOpacity>
    );
  };

  const renderTopTabs = props => {
    return (
      <View style={styles.topTabsContainerStyle}>
        <MaterialTopTabBar {...props} />
      </View>
    );
  };

  const backButton = renderBackButton();
  const topTabs = renderTopTabs(props);

  return (
    <View style={styles.container}>
      {backButton}
      {topTabs}
    </View>
  );
}
