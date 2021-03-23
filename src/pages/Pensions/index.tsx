/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ConectionError} from '../../components/ConectionError';
import {Header} from '../../components/Header';
import {PensionCard} from '../../components/PensionCard';
import {PensionsFilter} from '../../components/PensionsFilter';
import {} from '../../components/PensionsFilter/styles';
import {api} from '../../services/api';
import {Container, NotFoundText, ResultNotFound} from './styles';

interface Pension {
  id: number;
  name: string;
  type: string;
  tax: number;
  minimumValue: number;
  redemptionTerm: number;
  profitability: number;
}
interface FilterProps {
  taxFilter: boolean;
  valueFilter: boolean;
  redemptionFilter: boolean;
}

export function Pensions() {
  const [pensionsLoading, setPensionsLoading] = useState(true);
  const [failToLoad, setFailToLoad] = useState(false);
  const [pensionFiltersOn, setPensionFiltersOn] = useState(false);

  const [pensions, setPensions] = useState<Pension[]>([]);
  const [filteredPensions, setFilteredPensions] = useState<Pension[]>([]);
  function sortPensions(inputPensions: Pension[]) {
    const sortedPensions = inputPensions.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return sortedPensions;
  }

  function handleFilterPensions({
    valueFilter,
    taxFilter,
    redemptionFilter,
  }: FilterProps) {
    valueFilter || taxFilter || redemptionFilter
      ? setPensionFiltersOn(true)
      : setPensionFiltersOn(false);

    setFilteredPensions(pensions);

    if (valueFilter) {
      setFilteredPensions(oldValues => {
        const filteredOldValues = oldValues.filter(
          pension => pension.minimumValue === 100,
        );
        return [...new Set([...filteredOldValues])];
      });
    }
    if (taxFilter) {
      setFilteredPensions(oldValues => {
        const filteredOldValues = oldValues.filter(
          pension => pension.tax === 0,
        );
        return [...new Set([...filteredOldValues])];
      });
    }
    if (redemptionFilter) {
      setFilteredPensions(oldValues => {
        const filteredOldValues = oldValues.filter(
          pension => pension.redemptionTerm === 1,
        );

        return [...new Set([...filteredOldValues])];
      });
    }
  }

  useEffect(() => {
    async function getStocksFromAPI() {
      try {
        const response = await api.get('pension');
        const sortedPensions = sortPensions(response.data.data);
        setPensions(sortedPensions);
        setPensionsLoading(false);
      } catch (e) {
        setFailToLoad(true);
        setPensionsLoading(false);
      }
    }
    getStocksFromAPI();
    pensionsLoading;
  }, [pensionsLoading]);

  return (
    <>
      <Header hasGoBackButton={true} title={'Previdências'} />
      <PensionsFilter handleFilterPensions={handleFilterPensions} />

      {failToLoad ? (
        <ConectionError
          title={'fundos'}
          reloadPage={() => {
            setFailToLoad(false);
            setPensionsLoading(true);
          }}
        />
      ) : (
        <ScrollView>
          <Container>
            {pensionsLoading && (
              <ActivityIndicator
                animating={pensionsLoading}
                size="large"
                color="#6F4DBF"
                style={{alignSelf: 'center', marginTop: 178}}
              />
            )}

            {pensionFiltersOn && filteredPensions.length === 0 && (
              <ResultNotFound>
                <NotFoundText>Nenhum resultado foi encontrado</NotFoundText>
                <NotFoundText>para os filtros selecionados.</NotFoundText>
              </ResultNotFound>
            )}

            {pensionFiltersOn
              ? filteredPensions.map(pension => (
                  <PensionCard key={pension.id} {...pension} />
                ))
              : pensions.map(pension => (
                  <PensionCard key={pension.id} {...pension} />
                ))}
          </Container>
        </ScrollView>
      )}
    </>
  );
}
