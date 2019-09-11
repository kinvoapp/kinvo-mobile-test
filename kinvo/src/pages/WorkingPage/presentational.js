import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default function Presentational() {
  renderMaintenance = () => {
    return (
      <View style={styles.maintenanceContainerStyle}>
        <Text style={styles.textStyle}> Manutenção </Text>
        <Icon name="worker" color="#0DD1E2" size={50} />
        <ActivityIndicator />
      </View>
    );
  };

  const maintenance = renderMaintenance();

  return <View style={styles.container}>{maintenance}</View>;
}
