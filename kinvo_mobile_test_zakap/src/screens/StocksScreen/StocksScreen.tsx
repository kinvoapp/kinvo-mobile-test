import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../../components/Header';
import {RootStackParamList} from '../../models/RootStackParams';
import * as S from './StocksScreen.style';
import {StocksCard} from '../../components/StocksCard';
import {StocksForm} from '../../models/StocksForm';
import {getStocks} from '../../services/api';
import {Loading} from '../../components/Loading';
import {ErrorCard} from '../../components/ErrorCard';

type StocksScreenProp = StackNavigationProp<RootStackParamList, 'StocksScreen'>;

export const StocksScreen = () => {
  const [loading, setLoading] = useState(true);
  const [failedRequest, setFailedRequest] = useState(false);
  const [stockList, setStockList] = useState<StocksForm[]>([]);
  const navigation = useNavigation<StocksScreenProp>();

  const toggleLike = (id: number) => () => {
    const newStock = stockList.map(stock => {
      if (stock.id === id) {
        stock.isLiked = !stock.isLiked;
      }
      return stock;
    });
    setSortedStocks(newStock);
  };

  const renderItem = ({item}: {item: StocksForm}) => (
    <StocksCard stocks={item} onPress={toggleLike(item.id)} />
  );

  const setSortedStocks = (newStockList: StocksForm[]) => {
    setStockList(
      newStockList.sort((a, b) => {
        if (a.isLiked !== b.isLiked) {
          return a.isLiked ? -1 : 1;
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        }
        return -1;
      }),
    );
  };

  const getStocksInfo = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = (await getStocks()).data;
      setSortedStocks(data.map(stock => ({...stock, isLiked: false})));
      setFailedRequest(false);
    } catch (err) {
      setFailedRequest(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getStocksInfo();
  }, [getStocksInfo]);

  return (
    <S.Container>
      <Header
        title="Ações"
        isBackButton={true}
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <S.CardWraper>
        {loading ? (
          <Loading />
        ) : failedRequest ? (
          <ErrorCard onPress={getStocksInfo} />
        ) : (
          <FlatList
            style={{width: '100%'}}
            data={stockList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </S.CardWraper>
    </S.Container>
  );
};
