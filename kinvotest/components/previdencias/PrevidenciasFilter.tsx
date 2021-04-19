import React from 'react';
import { PrevidenciasFilterButton } from './PrevidenciasFilterButton';
import { FlatList, View } from 'react-native';
import { FilterOption } from './PrevidenciasSceneHooked';
import _ from 'lodash';
import { FilterFunction as Filter } from './PrevidenciasSceneHooked';

type SetFilterFunction = (newFilters: Array<Filter>) => void;
type SetOptionFunction = (newOptions: Array<FilterOption>) => void;
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
    <PrevidenciasFilterButton
      title={title}
      onPress={() => onPressFilter({ option: item, setFilter, setOptions })}
      isSelected={isSelected}
    />
  );
};

export const PrevidenciasFilter = ({
  options,
  setFilter,
  setOptions,
  onPressFilter,
}: {
  options: FilterOption[];
  setFilter: SetFilterFunction;
  setOptions: SetOptionFunction;
  onPressFilter: onPressFilter;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <FlatList
        horizontal={true}
        data={options}
        renderItem={({ item }) => renderFilterItem({ item, onPressFilter, setFilter, setOptions })}
        keyExtractor={(_, index: number) => index.toString()}
      />
    </View>
  );
};
