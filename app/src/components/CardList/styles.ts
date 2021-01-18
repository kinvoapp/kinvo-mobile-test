import { FlatListProps } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Colors from "../../utils/colors";

export const CardList = (styled(FlatList)`
  padding: 20px;
  background-color: ${Colors.BODY};
` as React.ComponentType) as new <T>() => FlatList<T>;
