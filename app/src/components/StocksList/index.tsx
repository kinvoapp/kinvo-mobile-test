import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

import {
  CardContainer,
  CardHeader,
  FavoriteButton,
  CardFooter,
  FavoriteImage,
} from './styles';

import api from '../../services/api';

import favoritedImg from '../../assets/favorited.png';
import unfavoriteImg from '../../assets/unfavorite.png';

import Title from '../Title'
import Description from '../Description'
import MinimumValue from '../MinimumValue'
import Profitability from '../Profitability';
import Separator from '../Separator';
import LoadScreen from '../LoadScreen';
import WifiError from '../WifiError';

interface StocksProps {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  favorited: boolean;
}

const StocksList: React.FC = () => {
  const [stocks, setStocks] = useState<StocksProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    let favoritedIds: number[] = []

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    })

    unsubscribe();

    async function getTheFavoriteStocksUsingTheId()  {
      const data = await AsyncStorage.getItem('@KinvoApp: FavoritedStocksID');
      favoritedIds = data !== null ? JSON.parse(data) : [];
    }

    getTheFavoriteStocksUsingTheId();

    api.get('stocks').then((response) => {

      const stocksDataOrdered = response.data.data.map((stock: StocksProps) => {
        return {
          ...stock,
          favorited: favoritedIds.length !== 0 ? favoritedIds.includes(stock.id) : false,
        }
      }).sort(
        (stockA: StocksProps, stockB: StocksProps) =>
        stockA.name.localeCompare(stockB.name)
      ).sort((stockA: StocksProps, stockB: StocksProps) => stockB.favorited - stockA.favorited)

      setStocks(stocksDataOrdered);
      setLoading(false);
    });
  }, []);

  const handleStockAsFavorite = useCallback(async (id: number) => {
    const favoritedStocks = stocks.map((stock) =>
      stock.id === id ? { ...stock, favorited: !stock.favorited } : stock
    ).sort(
      (stockA: StocksProps, stockB: StocksProps) =>
      stockA.name.localeCompare(stockB.name)
    );

    setStocks(favoritedStocks);

    const favoritedStocksIds = favoritedStocks.filter(stock => stock.favorited).map(stock => stock.id);
    await AsyncStorage.setItem('@KinvoApp: FavoritedStocksID', JSON.stringify(favoritedStocksIds));
  }, [stocks]);

  return (
    <>
      {!isConnected && <WifiError text="ações" navigateTo="Dashboard" />}
      {(isConnected && loading) && <LoadScreen /> }
      {stocks &&
      stocks.map((stock) => (
        <CardContainer key={stock.id}>
          <CardHeader>
            <View>
              <Title title={stock.name} />
              <Description description={stock.ticker} />
            </View>
            <FavoriteButton onPress={() => handleStockAsFavorite(stock.id)}>
              <FavoriteImage source={stock.favorited ? favoritedImg : unfavoriteImg} />
            </FavoriteButton>
          </CardHeader>
          <Separator />
          <CardFooter>
            <MinimumValue price={stock.minimumValue} />
            <Profitability percentage={stock.profitability} />
          </CardFooter>
        </CardContainer>
      ))}
    </>
  );
};

export default StocksList;
