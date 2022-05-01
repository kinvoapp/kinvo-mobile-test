import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {Header} from '../components/Header';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import {TitleView} from '../components/TitleView';
import {FundsItem} from '../components/FundsItem';
import api from '../services/api';

interface FundsProps {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}

export function Funds() {
  const [isLoading, setLoading] = useState(true);
  const [funds, setFunds] = useState<FundsProps[]>([]);

  useEffect(() => {
    async function loadStocks() {
      const {data} = await api
        .get('funds')
        .then(response => response.data)
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
      setFunds(data);
    }
    loadStocks();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TitleView title="Fundos" />

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={funds.sort((a, b) => a.name.localeCompare(b.name))}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <FundsItem
                name={item.name}
                type={item.type}
                minimumValue={item.minimumValue}
                status={item.status}
                profitability={item.profitability}
                rating={item.rating}
              />
            )}
            contentContainerStyle={styles.fundsList}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    backgroundColor: colors.lightGrey,
    height: '100%',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  icon: {
    paddingVertical: 30,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.title,
  },
  fundsList: {
    justifyContent: 'center',
  },
});
