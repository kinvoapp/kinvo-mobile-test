import React from "react";
import { View } from "react-native";
import Typography from "..";
import Colors from "../../../utils/colors";

// import { Container } from './styles';

type Props = {
  value: number;
};

function IndicatorTypography({ value }: Props) {
  const color =
    value > 0
      ? Colors.PROFITABILITY_POSITIVE
      : value < 0
      ? Colors.PROFITABILITY_NEGATIVE
      : Colors.DARK;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 8.4,
          height: 8.25,
          backgroundColor: color,
          marginRight: 7,
        }}
      ></View>
      <Typography type="strong" color={color}>
        {value}
      </Typography>
    </View>
  );
}

export default IndicatorTypography;
