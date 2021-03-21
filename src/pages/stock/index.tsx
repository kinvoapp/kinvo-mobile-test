import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import KinCardDefault from '../../components/card/card_default';
import KinGroupError from '../../components/error';
import KinHeader from '../../components/header';
import {fetchStocks} from '../../services/apiService';
import {Container, ContentCardStock} from './styles';
import Colors from '../../resources/colors';
import KinCenter from '../../components/center';
import {sortByFavoriteAndByName, sortByName} from '../../utils/utils';

export default function StockPage({navigation: {goBack}}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IgetStocks[]>();
  useEffect(() => {
    setStocks();
  }, []);

  const setStocks = async () => {
    setLoading(true);
    const result = await fetchStocks();
    const orderly = result?.sort((a, b) => sortByName(a.name, b.name));
    setData(orderly);
    setLoading(false);
  };

  const onChangedCard = (id: number) => {
    const sort = data;
    if (sort) {
      sort.map(e => (e.id === id ? (e.favorite = !e.favorite) : e.favorite));
      sort.sort((a, b) =>
        sortByFavoriteAndByName(
          a.name,
          b.name,
          a?.favorite || false,
          b?.favorite || false,
        ),
      );
      setData([...sort]);
    }
  };

  const render = () => {
    if (loading) {
      return (
        <KinCenter>
          <ActivityIndicator size="large" color={Colors.primary} />
        </KinCenter>
      );
    } else if (!data || data.length <= 0) {
      return (
        <KinCenter>
          <KinGroupError
            title="Ocorreu um erro."
            subtitle="Não foi possível se conectar ao banco de fundos."
            onPress={() => setStocks()}
          />
        </KinCenter>
      );
    } else {
      return data.map(e => (
        <ContentCardStock key={e.id}>
          <KinCardDefault
            title={e.name}
            subtitle={e.ticker}
            favorite={e.favorite || false}
            profitability={e.profitability}
            minimumValue={e.minimumValue}
            onChanged={() => {
              onChangedCard(e.id);
            }}
          />
        </ContentCardStock>
      ));
    }
  };

  return (
    <Container>
      <KinHeader title="Ações" onPress={() => goBack()} />
      {render()}
    </Container>
  );
}
