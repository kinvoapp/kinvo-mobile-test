import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FilterChip from '../FilterChip';

import { Item } from '../../store/modules/pension/types';

interface IPensionFilters {
  handleSetFilters: (filters: Item[]) => void;
}

const options = [
  {
    label: 'SEM TAXA',
    type: 'tax',
    value: 0,
  },
  {
    label: 'R$ 100,00',
    type: 'minimumValue',
    value: 100,
  },
  {
    label: 'D+ 1',
    type: 'redemptionTerm',
    value: 1,
  },
];

const PensionFilter: React.FC<IPensionFilters> = ({ handleSetFilters }) => {
  const [filters, setFilters] = useState<Item[]>([]);

  const handleSelectedFilter = (item: { [key: string]: number }) => {
    setFilters([...filters, item]);
    handleSetFilters([...filters, item]);
  };

  const removeSelectedFilter = (item: { [key: string]: number }) => {
    const newArr = filters.filter(
      option =>
        Object.values(option).toString() !== Object.values(item).toString(),
    );
    setFilters(newArr);
    handleSetFilters(newArr);
  };

  return (
    <View style={styles.container}>
      {options.map(item => (
        <FilterChip
          key={item.label}
          item={item}
          handleSelectedFilter={handleSelectedFilter}
          removeSelectedFilter={removeSelectedFilter}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PensionFilter;
