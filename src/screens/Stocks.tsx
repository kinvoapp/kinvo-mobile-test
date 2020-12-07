import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';
import { IStock } from '../constants/types';
import colors from '../assets/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../store';
import StockCard from '../components/StockCard';
import ListEmpty from '../components/ListEmpty';

const Stocks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<RootDispatch>();
  const { stocks, loading } = useSelector((state: RootState) => state.stocks);

  const [added, setAdded] = useState<boolean | null>(null);

  useEffect(() => {
    dispatch.stocks.load();
  }, []);

  useEffect(() => {
    if (added) {
      dispatch.stocks.sortAdded(stocks);
    } else if (added === null) {
      return;
    } else {
      dispatch.stocks.sortRemoved(stocks);
    }
  }, [stocks]);

  const handleIsFavorite = (stock: IStock) => {
    if (stock.isFavorite) {
      dispatch.stocks.addFavoriteToggled(stock);
      setAdded(true);
    } else {
      dispatch.stocks.removeFavoriteToggled(stock);
      setAdded(false);
    }
  };

  const renderItem = (item: IStock) => (
    <StockCard item={item} handleIsFavorite={handleIsFavorite} />
  );

  return (
    <Container screenName="Ações" hasBackBtn onPress={() => navigation.goBack()}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}
      {!loading && (
        <View style={styles.listContainer}>
          <FlatList
            data={stocks}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => `${item.name} + ${index}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
            ListEmptyComponent={<ListEmpty />}
            style={styles.list}
          />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  list: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
});

export default Stocks;
