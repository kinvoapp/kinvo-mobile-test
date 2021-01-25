import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';

import Field from '../../components/Field';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  PensionsList,
  PensionsItem,
  PensionTopContainer,
  PensionNameText,
  PensionTypeText,
  Separator,
  FilterContainer,
  FilterButton,
  FilterButtonText,
} from './styles';

export interface PensionProps {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  profitability: number;
  redemptionTerm: number;
}

interface PensionsResponse {
  success: boolean;
  data: PensionProps[];
  error: string | null;
}

interface FiltersProps {
  noTax: boolean;
  hundred: boolean;
  oneDay: boolean;
}

const Pensions: React.FC = () => {
  const [pensions, setPensions] = useState<PensionProps[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState<FiltersProps>({
    noTax: false,
    hundred: false,
    oneDay: false,
  });

  useEffect(() => {
    async function loadPensions(): Promise<void> {
      if (!isFetching) return;

      try {
        const result = await api.get<PensionsResponse>('/pension');

        let { data } = result.data;

        if (filters.noTax) {
          data = data.filter(p => p.tax === 0);
        }

        if (filters.hundred) {
          data = data.filter(p => p.minimumValue <= 100);
        }

        if (filters.oneDay) {
          data = data.filter(p => p.redemptionTerm <= 1);
        }

        // order by name
        data.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          if (nameA > nameB) {
            return 1;
          }

          if (nameA < nameB) {
            return -1;
          }

          return 0;
        });

        setPensions(data);
      } catch (err) {
        //
      }

      setIsFetching(false);
    }

    loadPensions();
  }, [isFetching]);

  return (
    <Container>
      <Header goBack>Previdências</Header>
      <FilterContainer>
        <FilterButton
          selected={filters.noTax}
          onPress={() => {
            setFilters({ ...filters, noTax: !filters.noTax });
            setIsFetching(true);
          }}
        >
          <FilterButtonText selected={filters.noTax}>SEM TAXA</FilterButtonText>
        </FilterButton>
        <FilterButton
          selected={filters.hundred}
          onPress={() => {
            setFilters({ ...filters, hundred: !filters.hundred });
            setIsFetching(true);
          }}
        >
          <FilterButtonText selected={filters.hundred}>
            R$ 100,00
          </FilterButtonText>
        </FilterButton>
        <FilterButton
          selected={filters.oneDay}
          onPress={() => {
            setFilters({ ...filters, oneDay: !filters.oneDay });
            setIsFetching(true);
          }}
        >
          <FilterButtonText selected={filters.oneDay}>D+1</FilterButtonText>
        </FilterButton>
      </FilterContainer>
      <Separator style={{ marginHorizontal: 20 }} />
      <PensionsList
        data={pensions}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => setIsFetching(true)}
            colors={['#6f4dbf']}
          />
        }
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{
          height: 80,
        }}
        renderItem={({ item }) => (
          <PensionsItem>
            <PensionTopContainer>
              <PensionNameText>{item.name}</PensionNameText>
            </PensionTopContainer>
            <PensionTypeText>{item.type}</PensionTypeText>
            <Separator />
            <Field label="Valor Mínimo" type="value" style={{ marginTop: 10 }}>
              {item.minimumValue}
            </Field>
            <Field label="Taxa" type="percent" style={{ marginTop: 15 }}>
              {item.tax}
            </Field>
            <Field label="Resgate" type="text" style={{ marginTop: 15 }}>
              {`D+ ${item.redemptionTerm}`}
            </Field>
            <Field
              label="Rentabilidade"
              type="percent"
              style={{ marginTop: 15 }}
            >
              {item.profitability}
            </Field>
          </PensionsItem>
        )}
      />
    </Container>
  );
};

export default Pensions;
