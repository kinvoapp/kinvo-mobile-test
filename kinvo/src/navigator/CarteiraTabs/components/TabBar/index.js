import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialTopTabBar } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

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

const TabBar = props => {
  const { navigationState, navigation, position } = props;
  const backButton = renderBackButton();
  const topTabs = renderTopTabs(props);

  return (
    <View style={styles.container}>
      {backButton}
      {topTabs}
    </View>
  );
};

export default TabBar;
