import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useNetwork } from '~hooks';
import { getStocks, Stock } from '~services/client';
import { CardAction, ErrorNetwork, Header, RenderCondition } from '~components';

import * as Component from './AcoesScreen.styles';
import { FlatList, StyleSheet, View } from 'react-native';
import { IconLoad } from '~assets/icons';

export function AcoesScreen() {
  const { execute, loading, isErrorNetwork } = useNetwork();
  const [stocks, setStocks] = useState<Stock[]>([]);

  const fetchStocks = useCallback(() => {
    execute(async () => {
      const response = await getStocks();

      if (response.success) {
        setStocks(response.data);
      }
    });
  }, []);

  useEffect(() => fetchStocks(), [fetchStocks]);

  function handleSortByFavoriteAndName(a, b) {
    return a.isFavorite - b.isFavorite || a.name.localeCompare(b.name);
  }

  const handleFavorite = useCallback((id: number) => {
    setStocks(props =>
      props.map(stock =>
        stock.id === id ? { ...stock, favorite: !stock.favorite } : stock,
      ),
    );
  }, []);

  const stocksSort = useMemo(() => {
    return stocks.sort(handleSortByFavoriteAndName);
  }, [stocks]);

  function handleTryAgain() {
    fetchStocks();
  }

  return (
    <>
      <Header title="Ações" hasArrowLeft />

      <Component.Container>
        <RenderCondition condition={!loading && !isErrorNetwork.current}>
          <FlatList<Stock>
            data={stocksSort}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CardAction
                key={item.id.toString()}
                stock={item}
                onFavorite={() => handleFavorite(item.id)}
                type="stocks"
              />
            )}
          />
        </RenderCondition>

        <RenderCondition condition={loading}>
          <View style={styles.iconLoad}>
            <IconLoad />
          </View>
        </RenderCondition>

        <RenderCondition condition={!loading && isErrorNetwork.current}>
          <View style={styles.iconLoad}>
            <ErrorNetwork onTryAgain={handleTryAgain} slog="ações" />
          </View>
        </RenderCondition>
      </Component.Container>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 37,
  },
  iconLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
