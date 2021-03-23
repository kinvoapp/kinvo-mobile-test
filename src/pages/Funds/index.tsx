/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FundCard} from '../../components/FundCard';
import {Header} from '../../components/Header';
import {ActivityIndicator} from 'react-native';
import {api} from '../../services/api';
import {Container} from './styles';
import {ConectionError} from '../../components/ConectionError';

interface Fund {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}

export function Funds() {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [failToLoad, setFailToLoad] = useState(false);
  const [fundsLoading, setFundsLoading] = useState(true);

  function sortFunds(inputStock: Fund[]) {
    const sortedFunds = inputStock.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return sortedFunds;
  }

  useEffect(() => {
    async function getStocksFromAPI() {
      try {
        const response = await api.get('funds');
        const sortedFunds = sortFunds(response.data.data);
        setFunds(sortedFunds);
        setFundsLoading(false);
      } catch (e) {
        setFailToLoad(true);
        setFundsLoading(false);
      }
    }
    getStocksFromAPI();
    fundsLoading;
  }, [fundsLoading]);

  return (
    <>
      <Header hasGoBackButton={true} title={'Fundos'} />

      {failToLoad ? (
        <ConectionError
          title={'fundos'}
          reloadPage={() => {
            setFailToLoad(false);
            setFundsLoading(true);
          }}
        />
      ) : (
        <ScrollView>
          <Container>
            {fundsLoading && (
              <ActivityIndicator
                animating={fundsLoading}
                size="large"
                color="#6F4DBF"
                style={{alignSelf: 'center', marginTop: 250}}
              />
            )}
            {funds.map(fund => (
              <FundCard key={fund.id} {...fund} />
            ))}
          </Container>
        </ScrollView>
      )}
    </>
  );
}
