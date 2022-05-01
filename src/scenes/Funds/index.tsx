import React, { useCallback, useEffect } from 'react';
import { ListRenderItemInfo } from 'react-native';
import useFund from '~/hooks/useFund';
import { EmptyData, Error, Loading } from '~/components';
import FundCard from './components/FundsCard';
import { Container, FundList } from './styles';

const Funds = () => {
  const { funds, isLoading, hasError, loadFunds } = useFund();

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Fund>) => {
    return <FundCard {...item} />;
  }, []);

  const renderListEmptyComponent = useCallback(() => {
    if (hasError) {
      return (
        <Error
          infoText="Não foi possível se conectar ao banco de fundos."
          onPress={loadFunds}
        />
      );
    }

    return <EmptyData title="Sem Fundos" tip="Não foram encontrados fundos." />;
  }, [hasError, loadFunds]);

  useEffect(() => {
    loadFunds();
  }, []);

  return (
    <Loading visible={isLoading}>
      <Container>
        <FundList
          data={funds}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderListEmptyComponent}
        />
      </Container>
    </Loading>
  );
};

export default Funds;
