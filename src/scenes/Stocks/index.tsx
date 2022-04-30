import React, { useCallback, useEffect } from 'react';
import { ListRenderItemInfo } from 'react-native';
import useStock from '~/hooks/useStock';
import { EmptyData, Error, Loading } from '~/components';
import StockCard from './components/StockCard';
import { Container, StockList } from './styles';

const Stocks = () => {
  const { stocks, isLoading, hasError, loadStocks } = useStock();

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Stock>) => {
    return <StockCard {...item} />;
  }, []);

  const renderListEmptyComponent = useCallback(() => {
    if (hasError) {
      return (
        <Error
          infoText="Não foi possível se conectar ao banco de ações."
          onPress={loadStocks}
        />
      );
    }

    return (
      <EmptyData
        title="Sem ações"
        tip="Não foram encontradas ações no momento"
      />
    );
  }, [hasError, loadStocks]);

  useEffect(() => {
    loadStocks();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <StockList
        data={stocks}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </Container>
  );
};

export default Stocks;
