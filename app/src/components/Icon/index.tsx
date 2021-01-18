import React from "react";
import SvgUri, { SvgUriProps } from "expo-svg-uri";
import Colors from "../../utils/colors";
const arrowUp = require("../../assets/up-shape.svg");
const arrowDown = require("../../assets/down-shape.svg");
const arrowLeft = require("../../assets/arrow-left-shape.svg");
const stocks = require("../../assets/stocks-icon.svg");
const funds = require("../../assets/funds-icon.svg");
const pension = require("../../assets/pension-icon.svg");
const heartFilled = require("../../assets/heart-filled.svg");
const heartOutlined = require("../../assets/heart-outlined.svg");

interface Props extends SvgUriProps {
  name:
    | "arrow-up"
    | "arrow-down"
    | "arrow-left"
    | "stocks"
    | "funds"
    | "pension"
    | "heart-outlined"
    | "heart-filled";
  source?: undefined;
}

const sources = {
  "arrow-up": arrowUp,
  "arrow-down": arrowDown,
  "arrow-left": arrowLeft,
  stocks: stocks,
  funds: funds,
  pension: pension,
  "heart-filled": heartFilled,
  "heart-outlined": heartOutlined,
} as { [key in Props["name"]]: any };

function Icon({ name, ...props }: Props) {
  return <SvgUri {...props} source={sources[name]} />;
}

export default Icon;
