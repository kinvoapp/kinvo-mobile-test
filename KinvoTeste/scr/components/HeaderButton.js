import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function HeaderFlattButton({ text, onPress, color = "#fff" }) {
  const styles = StyleSheet.create({
    button: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: color,
      width: "27.5%",
      height: "80%",
      alignContent: "center",
      justifyContent: "center",
    },
    textButton: {
      color: "#707B81",
      fontSize: 16,
      fontWeight: "900",
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.textButton}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}
