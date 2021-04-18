import React, { useState } from 'react';
import { PrevidenciasFilterButton } from './PrevidenciasFilterButton';
import { FlatList, View } from 'react-native';
import { FilterOption, PrevidenciasRequestData } from './PrevidenciasSceneHooked';
import _ from 'lodash';

const renderFilterItem = ({ item, index, callback }: { item: FilterOption; index: number; callback: () => void }) => {
  const { title, filter, isSelected } = item;

  return <PrevidenciasFilterButton title={title} onPress={() => callback()} isSelected={isSelected} />;
};

export const PrevidenciasFilter = ({
  requestData,
  options,
  callback,
}: {
  requestData: PrevidenciasRequestData[];
  options: FilterOption[];
  callback: () => void;
}) => {
  const initializeButtons = options.map((el) => {
    return el.title;
  });
  const [selectedButtons, setSelectedButtons] = useState(initializeButtons);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <FlatList
        horizontal
        data={options}
        renderItem={renderFilterItem}
        keyExtractor={(_, index: number) => index.toString()}
      />

      {/* <PrevidenciasFilterButton
        title={'SEM TAXA'}
        onPress={() => this.changeFilter({ filterValue: PrevidenciasSceneFilterEnum.Taxa })}
        isSelected={this.state.activeFilter === PrevidenciasSceneFilterEnum.Taxa}
      />
      <PrevidenciasFilterButton
        title={'R$100,00'}
        isSelected={this.state.activeFilter === PrevidenciasSceneFilterEnum.ValorMinimo}
        onPress={() => this.changeFilter({ filterValue: PrevidenciasSceneFilterEnum.ValorMinimo })}
      />
      <PrevidenciasFilterButton
        title={'D+1'}
        isSelected={this.state.activeFilter === PrevidenciasSceneFilterEnum.Resgate}
        onPress={() => this.changeFilter({ filterValue: PrevidenciasSceneFilterEnum.Resgate })}
      /> */}
    </View>
  );
};
