import React, { useCallback } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Chip } from '~/components';
import { FilterType } from '../..';

interface FilterChipProps {
  title: string;
  type: FilterType;
  value: boolean;
  style?: ViewStyle;
  onPress: (type: FilterType) => void;
}

const FilterChip = ({
  title,
  type,
  value,
  style,
  onPress,
}: FilterChipProps) => {
  const { colors } = useTheme();

  const handleSelected = useCallback(() => {
    onPress(type);
  }, [onPress, type]);

  return (
    <TouchableOpacity
      onPress={handleSelected}
      hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
    >
      <Chip
        title={title}
        style={style}
        color={value ? colors.primary : colors.white}
        titleColor={value ? colors.white : colors.text}
      />
    </TouchableOpacity>
  );
};

export default FilterChip;
