import React from "react";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../Icon";

type Props = {
  active: boolean;
  width?: number | string;
  height?: number | string;
  onPress?: (event: GestureResponderEvent) => void;
};

function FavoriteButton({ active, width = 20, height = 18, onPress }: Props) {
  return (
    <TouchableOpacity style={{ padding: 2 }} onPress={onPress}>
      <Icon
        name={active ? "heart-filled" : "heart-outlined"}
        width={20}
        height={18}
      />
    </TouchableOpacity>
  );
}

export default FavoriteButton;
