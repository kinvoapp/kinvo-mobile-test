import React from 'react';
import { FilterButton } from './FilterButton';
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import _ from 'lodash';
import { FilterOption, SetFilterFunction, SetOptionFunction } from '../../constants/types';

type onPressFilter = ({
  option,
  setFilter,
  setOptions,
}: {
  option: FilterOption;
  setFilter: SetFilterFunction;
  setOptions: SetOptionFunction;
}) => void;

const renderFilterItem = ({
  item,
  onPressFilter,
  setFilter,
  setOptions,
}: {
  item: FilterOption;
  onPressFilter: onPressFilter;
  setFilter: SetFilterFunction;
  setOptions: SetOptionFunction;
}) => {
  const { title, isSelected } = item;

  return (
    <FilterButton
      title={title}
      onPress={() => onPressFilter({ option: item, setFilter, setOptions })}
      isSelected={isSelected}
    />
  );
};

export const Filter = ({
  options,
  setFilter,
  setOptions,
  onPressFilter,
  contentContainerStyle,
}: {
  options: FilterOption[];
  setFilter: SetFilterFunction;
  setOptions: SetOptionFunction;
  onPressFilter: onPressFilter;
  contentContainerStyle: StyleProp<ViewStyle>;
}) => {
  const { rowStyle } = styles;
  return (
    <View style={rowStyle}>
      <FlatList
        horizontal={true}
        data={options}
        bounces={false}
        contentContainerStyle={contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderFilterItem({ item, onPressFilter, setFilter, setOptions })}
        keyExtractor={(_, index: number) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
