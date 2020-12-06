import React, { useState } from 'react';
import { Text, StyleSheet, TextStyle, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import typography from '../assets/fonts';
import { ChipItem } from '../constants/types';

interface IFilterChip {
  item: ChipItem;
  handleSelectedFilter: (item: { [key: string]: number }) => void;
  removeSelectedFilter: (item: { [key: string]: number }) => void;
}

const FilterChip: React.FC<IFilterChip> = ({
  item,
  handleSelectedFilter,
  removeSelectedFilter,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const handleOnPress = (item: ChipItem) => {
    if (active) {
      setActive(false);
      removeSelectedFilter({ [item.type]: item.value });
    } else {
      setActive(true);
      handleSelectedFilter({ [item.type]: item.value });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.chip, active && { backgroundColor: colors.primary }]}
      onPress={() => handleOnPress(item)}>
      <Text style={[styles.label, active && { color: colors.white }]}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    width: 100,
    backgroundColor: colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  label: {
    fontWeight: '600',
    ...typography.body,
    color: colors.textGrey,
  } as TextStyle,
});

export default FilterChip;
