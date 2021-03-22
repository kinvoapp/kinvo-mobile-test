import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FundCard} from '../../components/FundCard';
import {Header} from '../../components/Header';
import {api} from '../../services/api';
import {Container} from './styles';

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
      const response = await api.get('funds');
      const sortedFunds = sortFunds(response.data.data);
      setFunds(sortedFunds);
    }
    getStocksFromAPI();
  }, []);

  return (
    <>
      <Header hasGoBackButton={true} title={'Fundos'} />
      <ScrollView>
        <Container>
          {funds.map(fund => (
            <FundCard key={fund.id} {...fund} />
          ))}
        </Container>
      </ScrollView>
    </>
  );
}
