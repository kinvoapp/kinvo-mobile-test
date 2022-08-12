import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { IconLoad } from '~assets/icons';
import {
  ButtonSimple,
  CardPension,
  DivisorInLine,
  ErrorNetwork,
  Header,
  RenderCondition,
} from '~components';
import { useNetwork } from '~hooks';
import { getPension, Pension } from '~services/client';

import * as Component from './PensionScreen.styles';

export type PensionScreenProps = { children: string };

enum FilterPension {
  'ZERO_TAXA' = 0,
  '100_TAXA' = 100,
  'D1' = 1,
}

enum ConditionalFilter {
  '===' = '===',
  '>=' = '===',
}

type FilterPensions = {
  id: number;
  name: FilterNames;
  filter: FilterPension;
  selected: boolean;
  operation: ConditionalFilter;
};

const dataPensionFilter: FilterPensions[] = [
  {
    id: 1,
    name: 'SEM TAXA',
    filter: FilterPension.ZERO_TAXA,
    selected: false,
    operation: ConditionalFilter['==='],
  },
  {
    id: 2,
    name: 'R$100,00',
    filter: FilterPension['100_TAXA'],
    selected: false,
    operation: ConditionalFilter['>='],
  },
  {
    id: 3,
    name: 'D+1',
    filter: FilterPension.D1,
    selected: false,
    operation: ConditionalFilter['==='],
  },
];

type FilterNames = 'SEM TAXA' | 'R$100,00' | 'D+1';

export function PensionScreen() {
  const { execute, loading, isErrorNetwork } = useNetwork();
  const [pensions, setPensions] = useState<Pension[]>([]);
  const [pensionsFilter, setPensionsFilter] = useState<Pension[]>([]);
  const [filtersPension, setFiltersPensions] = useState<FilterPensions[]>([]);
  const [filterCallBacks, setFilterCallBacks] = useState<[]>([]);

  const fetchPension = useCallback(() => {
    execute(async () => {
      const response = await getPension();

      if (response.success) {
        setPensions(response.data);
      }
    });
  }, []);

  useEffect(() => {
    setFiltersPensions(dataPensionFilter);
    fetchPension();
  }, [fetchPension]);

  function handleSortByFavoriteAndName(a: Pension, b: Pension) {
    return a.name.localeCompare(b.name, 'pt-br');
  }

  function handleTryAgain() {
    fetchPension();
  }

  function handleSelectedFilter(filterName: FilterNames) {
    setFiltersPensions(props =>
      props.map(filter =>
        filter.name === filterName
          ? { ...filter, selected: !filter.selected }
          : filter,
      ),
    );
  }

  function handleFilterTaxaZero() {
    handleSelectedFilter('SEM TAXA');

    setPensionsFilter(
      pensions.filter(pension => pension.tax === FilterPension.ZERO_TAXA),
    );
  }

  function handleFilterMinimumValueOf100() {
    handleSelectedFilter('R$100,00');

    setPensionsFilter(
      pensions.filter(
        pension => pension.minimumValue >= FilterPension['100_TAXA'],
      ),
    );
  }

  function handleFilterRansomEqualToOne() {
    handleSelectedFilter('D+1');

    setPensionsFilter(
      pensions.filter(pension => pension.redemptionTerm === FilterPension.D1),
    );
  }

  const hasFilterActive = useMemo(
    () => filtersPension.every(i => !i.selected),
    [filtersPension],
  );

  return (
    <>
      <Header title="Previdências" hasArrowLeft />
      <Component.Container>
        <RenderCondition condition={!loading && !isErrorNetwork.current}>
          <>
            <Component.FilterPension>
              <ButtonSimple
                key={filtersPension[0]?.id}
                typeButton={
                  filtersPension[0]?.selected ? 'primary' : 'secondary'
                }
                size="smallLarge"
                style={styles.buttonSimple}
                onPress={handleFilterTaxaZero}>
                {filtersPension[0]?.name}
              </ButtonSimple>

              <ButtonSimple
                key={filtersPension[1]?.id}
                typeButton={
                  filtersPension[1]?.selected ? 'primary' : 'secondary'
                }
                size="smallLarge"
                style={styles.buttonSimple}
                onPress={handleFilterMinimumValueOf100}>
                {filtersPension[1]?.name}
              </ButtonSimple>

              <ButtonSimple
                key={filtersPension[2]?.id}
                typeButton={
                  filtersPension[2]?.selected ? 'primary' : 'secondary'
                }
                size="smallLarge"
                style={styles.buttonSimple}
                onPress={handleFilterRansomEqualToOne}>
                {filtersPension[2]?.name}
              </ButtonSimple>
            </Component.FilterPension>

            <FlatList<Pension>
              data={
                hasFilterActive
                  ? pensions.sort(handleSortByFavoriteAndName)
                  : pensionsFilter.sort(handleSortByFavoriteAndName)
              }
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<DivisorInLine isPadding="default" />}
              contentContainerStyle={styles.contentContainerStyle}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <CardPension key={item.id.toString()} pension={item} slogan />
              )}
            />
          </>
        </RenderCondition>

        <RenderCondition condition={loading}>
          <View style={styles.iconLoad}>
            <IconLoad />
          </View>
        </RenderCondition>

        <RenderCondition condition={!loading && isErrorNetwork.current}>
          <View style={styles.iconLoad}>
            <ErrorNetwork onTryAgain={handleTryAgain} slog="previdências" />
          </View>
        </RenderCondition>
      </Component.Container>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    paddingBottom: 100,
  },
  iconLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSimple: { marginRight: 20 },
});
