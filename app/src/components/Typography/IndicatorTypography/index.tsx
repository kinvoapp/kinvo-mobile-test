import React from "react";
import { View } from "react-native";
import Typography from "..";
import Colors from "../../../utils/colors";
import Icon from "../../Icon";

// import { Container } from './styles';

type Props = {
  value: number;
  prefix?: string | number;
  sufix?: string | number;
};

function IndicatorTypography({ value, prefix, sufix }: Props) {
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
          // width: 8.4,
          // height: 8.25,
          // backgroundColor: color,
          marginRight: 7,
        }}
      >
        {value !== 0 && (
          <Icon
            width={8.4}
            height={8.25}
            name={value > 0 ? "arrow-up" : "arrow-down"}
          />
        )}
      </View>
      <Typography type="strong" color={color}>
        {prefix}
        {value}
        {sufix}
      </Typography>
    </View>
  );
}

export default IndicatorTypography;
