import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import { ChipItem } from '../../store/modules/pension/types';

import colors from '../../styles/colors';

interface IFilterChip {
  item: ChipItem;
  handleSelectedFilter: (item: { [key: string]: number }) => void;
  removeSelectedFilter: (item: { [key: string]: number }) => void;
}

const FilterChip: React.FC<IFilterChip> = ({
  handleSelectedFilter,
  item,
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
      onPress={() => handleOnPress(item)}
    >
      <Text style={[styles.label, active && { color: '#fff' }]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  label: {
    fontWeight: '600',
    color: colors.second,
  } as TextStyle,
});

export default FilterChip;
