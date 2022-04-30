import React, { useCallback } from 'react';
import { Separator } from '~/components';
import FilterChip from './components/FilterChip';
import { Content, Container } from './styles';

export type FilterType = 'noTax' | '100' | 'd+1';

interface FilterProps {
  filters: FilterType[];
  onChange: (filters: FilterType[]) => void;
}

const Filter = ({ filters, onChange }: FilterProps) => {
  const handlePress = useCallback(
    (type: FilterType) => {
      const index = filters.findIndex(filterType => filterType === type);

      if (index > -1) {
        const newFilters = [...filters];
        newFilters.splice(index, 1);

        onChange(newFilters);

        return;
      }

      onChange([...filters, type]);
    },
    [filters, onChange],
  );

  return (
    <Container>
      <Content>
        <FilterChip
          title="Sem Taxas"
          onPress={handlePress}
          type="noTax"
          value={filters.includes('noTax')}
        />

        <FilterChip
          title="R$ 100,00"
          onPress={handlePress}
          type="100"
          value={filters.includes('100')}
        />

        <FilterChip
          title="D+1"
          style={{ width: 80 }}
          onPress={handlePress}
          type="d+1"
          value={filters.includes('d+1')}
        />
      </Content>

      <Separator />
    </Container>
  );
};

export default Filter;
