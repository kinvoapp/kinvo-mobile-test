import React from "react";
import { TextStyle } from "react-native";
import Colors from "../../utils/colors";
import { StyledText as Typography } from "./styles";

export type Props = {
  type: "title" | "subtitle" | "ticker" | "body" | "strong";
  color?: Colors;
  align?: TextStyle["textAlign"];
  textTransform?: TextStyle["textTransform"];
  fontSize?: TextStyle["fontSize"];
};

export default Typography;
