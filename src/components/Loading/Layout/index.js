import React from "react";
import { Animated } from "react-native";

export default function Loading({ spin }) {
  return (
    <Animated.View
      style={{
        borderWidth: 5,
        borderColor: "#6F4DBF",
        borderTopWidth: 5,
        borderTopColor: "#ECF0F2",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 50,
        width: 40,
        height: 40,
        transform: [{ rotate: spin }],
      }}
    ></Animated.View>
  );
}
