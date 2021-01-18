import React from "react";
import { GestureResponderEvent } from "react-native";
import Icon from "../Icon";
import { Container } from "./styles";

type Props = {
  active: boolean;
  width?: number | string;
  height?: number | string;
  onPress?: (event: GestureResponderEvent) => void;
};

function FavoriteButton({ active, width = 20, height = 18, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Icon
        name={active ? "heart-filled" : "heart-outlined"}
        width={width}
        height={height}
      />
    </Container>
  );
}

export default FavoriteButton;
