import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../../components/Header';
import {RootStackParamList} from '../../models/RootStackParams';
import * as S from './Stocks.style';
import {StocksCard} from '../../components/StocksCard';
import {StocksForm} from '../../models/StocksForm';
import {getStocks} from '../../services/api';
import {Loading} from '../../components/Loading';
import { ErrorCard } from '../../components/ErrorCard';

type StocksScreenProp = StackNavigationProp<RootStackParamList, 'Stocks'>;

export const Stocks = () => {
  const [loading, setLoading] = useState(true);
  const [ failedRequest, setFailedRequest] = useState(false);
  const [stocks, setStocks] = useState<StocksForm[]>([]);
  const navigation = useNavigation<StocksScreenProp>();

  const toggleLike = (id: number) => () => {
    const newStock = stocks.map(stock => {
      if (stock.id === id) {
        stock.isLiked = !stock.isLiked;
      }
      return stock;
    });
    setStocks(newStock);
  };

  const renderItem = ({item}: {item: StocksForm}) => (
    <StocksCard stocks={item} onPress={toggleLike(item.id)} />
  );

  const sortedStocks = stocks.sort((a, b) => {
    if (a.isLiked !== b.isLiked) {
      return a.isLiked ? -1 : 1
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    } 
    return -1;
  });

  const getStocksInfo = useCallback(async () => {
    setLoading(true)
    try {
      const {data} = (await getStocks()).data;
      setStocks(data);
      setFailedRequest(false)
    } catch (err) {
      setFailedRequest(true)
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [setStocks]);

  useEffect(() => {
    getStocksInfo();
  }, [getStocksInfo]);

  return (
    <S.Container>
      <Header
        title="Ações"
        isBackButton={true}
        onPress={() => navigation.navigate('Home')}
      />
      <S.CardWraper>
        {loading ? (
          <Loading />
        ) : (
          failedRequest ? <ErrorCard onPress={getStocksInfo}/> : <FlatList
            style={{ width: "100%"}}
            data={sortedStocks}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </S.CardWraper>
    </S.Container>
  );
};
