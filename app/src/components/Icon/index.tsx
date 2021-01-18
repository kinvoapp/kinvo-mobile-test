import React from "react";
import { View } from "react-native";
import SvgUri, { SvgUriProps } from "expo-svg-uri";
import Colors from "../../utils/colors";
// import { Container } from './styles';
const arrowUp = require("../../assets/up-shape.svg");
const arrowDown = require("../../assets/down-shape.svg");
const arrowLeft = require("../../assets/arrow-left-shape.svg");
const stocks = require("../../assets/stocks-icon.svg");
const funds = require("../../assets/funds-icon.svg");
const pension = require("../../assets/pension-icon.svg");

interface Props extends SvgUriProps {
  name:
    | "arrow-up"
    | "arrow-down"
    | "arrow-left"
    | "stocks"
    | "funds"
    | "pension"
    | "heart";
  source?: undefined;
}

const sources = {
  "arrow-up": arrowUp,
  "arrow-down": arrowDown,
  "arrow-left": arrowLeft,
  stocks: stocks,
  funds: funds,
  pension: pension,
} as { [key in Props["name"]]: any };

function Icon({ name }: Props) {
  //   console.log({ name });
  return <SvgUri width="8" height="8" source={sources[name]} />;
}

export default Icon;
