/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../../components/Header';
import {PensionCard} from '../../components/PensionCard';
import {PensionsFilter} from '../../components/PensionsFilter';
import {api} from '../../services/api';
import {Container} from './styles';

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
    setFilteredPensions([]);
    console.log(valueFilter);
    if (valueFilter) {
      const minValuePensions = pensions.filter(
        pension => pension.minimumValue === 100,
      );
      setFilteredPensions(oldValues => {
        return [...new Set([...oldValues, ...minValuePensions])];
      });
    }
    if (taxFilter) {
      const noTaxesPensions = pensions.filter(pension => pension.tax === 0);
      setFilteredPensions(oldValues => {
        return [...new Set([...oldValues, ...noTaxesPensions])];
      });
    }
    if (redemptionFilter) {
      const redemptionPensions = pensions.filter(
        pension => pension.redemptionTerm === 1,
      );
      setFilteredPensions(oldValues => {
        return [...new Set([...oldValues, ...redemptionPensions])];
      });
    }
  }

  useEffect(() => {
    async function getStocksFromAPI() {
      const response = await api.get('pension');
      const sortedPensions = sortPensions(response.data.data);
      setPensions(sortedPensions);
      setPensionsLoading(false);
    }
    getStocksFromAPI();
  }, []);

  return (
    <>
      <Header hasGoBackButton={true} title={'Previdências'} />
      <PensionsFilter handleFilterPensions={handleFilterPensions} />

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

          {pensionFiltersOn
            ? filteredPensions.map(pension => (
                <PensionCard key={pension.id} {...pension} />
              ))
            : pensions.map(pension => (
                <PensionCard key={pension.id} {...pension} />
              ))}
        </Container>
      </ScrollView>
    </>
  );
}
