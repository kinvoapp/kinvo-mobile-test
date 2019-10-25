import React from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Presentational(props) {
  const { lastRegisterItem } = props;
  const { key, color, message } = lastRegisterItem;


  renderLastRegister = () => {
    const icon = renderIcon();
    const message = renderMessage();
    return (
      <TouchableOpacity
        style={styles.lastRegister}
      >
        {icon}
        {message}
      </TouchableOpacity>
    );
  };

  renderIcon = () => (
    <View
      style={[{
        backgroundColor: color,       
      },styles.icon]}
    >
      {/* simulando icone */}
      <Text style={{ color: "white", alignSelf: "center" }}>X</Text>
    </View>
  );
  renderMessage = () => (
    <Text style={styles.message}>
      {message}
    </Text>
  );

  renderContent = () => {
    const lastRegister = renderLastRegister();
    const IsEmptyLastRegister= lastRegisterItem.length === 0
    if(IsEmptyLastRegister)
    return null

    return lastRegister;
  };

  const content = renderContent();

  return (
    <View
      style={styles.container}
    >
      {content}
    </View>
  );
}
Presentational.propTypes = {
  lastRegisterItem: PropTypes.object,
};

Presentational.defaultProps = {
  lastRegisterItem: []
};