import React, { FC } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FilterContainer, FilterText } from "../style";
import { FilterProps, FilterContainerProps } from "../types";

const Filter: FC<FilterProps> = ({
  children,
  isActive,
  changeFilterActive,
}) => {
  return (
    <TouchableOpacity onPress={changeFilterActive}>
      <FilterContainer isActive={isActive}>
        <FilterText isActive={isActive}>{children}</FilterText>
      </FilterContainer>
    </TouchableOpacity>
  );
};

export default Filter;
