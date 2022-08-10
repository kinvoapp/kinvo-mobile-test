import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import api from '../../service/api'

import NetInfo from "@react-native-community/netinfo";
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';
interface StocksProps {
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
}
import { StockCard } from '../../components/StockCard';
import { Empty } from '../../components/Empty';

export function Stocks() {

  const [stocks, setStocks] = useState<StocksProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [Conn, setConn] = useState(true);

  useEffect(() => {
    async function getStocks() {
      const { data } = await api
        .get('stocks')
        .then((response) => response.data)
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      setStocks(data);
    }
    getStocks();

  }, []);

  NetInfo.fetch().then(state => {
    setConn(state.isConnected);
  });

  return (
    <View>
      {isLoading === true && <Loading />}

      {Conn === false ? (<Error local='Pension' />)
        : (<View style={isLoading ? { display: 'none' } : { display: 'flex' }}>
          {
            stocks.length > 0 ?
              <FlatList
                data={stocks.sort(
                  (a, b) =>
                    +a.isFavorite - +b.isFavorite || a.name.localeCompare(b.name)
                )}
                renderItem={({ item, index }) => {
                  return (
                    <StockCard
                      key={index}
                      name={item.name}
                      ticker={item.ticker}
                      minimumValue={item.minimumValue}
                      profitability={item.profitability}
                      handleFavoriteButton={() => {
                        item.isFavorite = !item.isFavorite
                        console.log("============")
                        console.log(item)
                      }}
                      isFavorite={item.isFavorite}
                    />
                  );
                }}
              />
              :
              (
                <Empty />
              )
          }
        </View>)
      }
    </View>
  );
}


