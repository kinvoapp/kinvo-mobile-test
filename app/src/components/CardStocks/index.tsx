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

// useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     setIsConnected(state.isConnected);
  //   })

  //   const getTheFavoriteStocksUsingTheId = async () => {
  //     const data = await AsyncStorage.getItem('@KinvoApp: FavoritedStocksID');
  //     console.log(data);
  //     return data;
  //   }

  //   const getDataFromAPI = async () => {
  //     const response = await api.get('stocks')
  //     const stocksDataOrdered = response.data.data.sort(
  //       (stockA: StocksProps, stockB: StocksProps) =>
  //       stockA.name.localeCompare(stockB.name)
  //     ).map((stock: StocksProps ) => {
  //       return {
  //         ...stock,
  //         favorited: false
  //       }
  //     });
  //     setStocks(stocksDataOrdered);
  //     setLoading(false);
  //   }

  //   unsubscribe();

  //   getTheFavoriteStocksUsingTheId();
  //   getDataFromAPI();

  // }, []);

const CardStocks: React.FC = () => {
  const [stocks, setStocks] = useState<StocksProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [arrayId, setArrayId] = useState<number[]>([]);



  useEffect(() => {
    async function getTheFavoriteStocksUsingTheId()  {
      try {
        const data = await AsyncStorage.getItem('@KinvoApp: FavoritedStocksID');
        const datas = data !== null ? JSON.parse(data) : null;
        setArrayId(datas);
      } catch (err) {
        console.log(err);
      }

    }

    getTheFavoriteStocksUsingTheId();

  }, []);

  useEffect(() => {
    async function loadDataAPI() {
      const response = await api.get('stocks');
      const stocksDataOrdered = response.data.data.sort(
        (stockA: StocksProps, stockB: StocksProps) =>
        stockA.name.localeCompare(stockB.name)
      ).map((stock: StocksProps) => {
        return {
          ...stock,
          favorited: arrayId.includes(stock.id),
        }
      })
    }

    loadDataAPI();
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    })

    unsubscribe();

    api.get('stocks').then((response) => {
      const stocksDataOrdered = response.data.data.sort(
        (stockA: StocksProps, stockB: StocksProps) =>
        stockA.name.localeCompare(stockB.name)
      ).map((stock: StocksProps) => {
        return {
          ...stock,
          favorited: arrayId.includes(stock.id),
        }
      })

      setStocks(stocksDataOrdered);
      setLoading(false);
    });
  }, [arrayId]);

  const handleStockAsFavorite = useCallback(async (id: number) => {
    const favoritedStocks = stocks.map((stock) =>
      stock.id === id ? { ...stock, favorited: !stock.favorited } : stock
    );

    const getAsyncData = await AsyncStorage.getItem('@KinvoApp: FavoritedStocksID');
    const parsedAsyncData = getAsyncData !== null ? JSON.parse(getAsyncData) : null;

    if (parsedAsyncData.includes(id) === true) {
      const index = parsedAsyncData.indexOf(id);
      parsedAsyncData.splice(index, 1);
    } else if (parsedAsyncData.includes(id) === false) {
      parsedAsyncData.push(id);
    };

    await AsyncStorage.setItem('@KinvoApp: FavoritedStocksID', JSON.stringify(parsedAsyncData));
    setStocks(favoritedStocks);
  }, [stocks]);

  return (
    <>
      {!isConnected && <WifiError text="ações" navigateTo="Stocks" />}
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

export default CardStocks;
