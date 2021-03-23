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

export function Pensions() {
  const [pensionsLoading, setPensionsLoading] = useState(true);

  const [pensions, setPensions] = useState<Pension[]>([]);

  function sortPensions(inputStock: Pension[]) {
    const sortedPensions = inputStock.sort(function (a, b) {
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
      <PensionsFilter />

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
          {pensions.map(pension => (
            <PensionCard key={pension.id} {...pension} />
          ))}
        </Container>
      </ScrollView>
    </>
  );
}
