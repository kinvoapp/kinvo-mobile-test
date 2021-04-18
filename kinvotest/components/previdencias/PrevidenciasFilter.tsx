import React, { useState } from 'react';
import { PrevidenciasFilterButton } from './PrevidenciasFilterButton';
import { FlatList, View } from 'react-native';
import { FilterOption, PrevidenciasRequestData } from './PrevidenciasSceneHooked';
import _ from 'lodash';

const renderFilterItem = (
  { item }: { item: FilterOption; index: number },
  filterFn: ({ option }: { option: FilterOption }) => void,
  setFilter: () => void,
  setOptions: () => void,
) => {
  const { title, isSelected } = item;

  return (
    <PrevidenciasFilterButton
      title={title}
      onPress={() => filterFn({ option: item, setFilter, setOptions })}
      isSelected={isSelected}
    />
  );
};

export const PrevidenciasFilter = ({
  options,
  setFilter,
  setOptions,
  filterFn,
}: {
  requestData: PrevidenciasRequestData[];
  options: FilterOption[];
  callback: () => void;
}) => {
  console.log(options);
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
        renderItem={(item, index) => renderFilterItem(item, filterFn, setFilter, setOptions)}
        keyExtractor={(_, index: number) => index.toString()}
      />
    </View>
  );
};
