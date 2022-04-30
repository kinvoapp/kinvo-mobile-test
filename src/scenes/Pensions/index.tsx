import React, { useCallback, useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import usePension from '~/hooks/usePension';
import { EmptyData, Error, Loading } from '~/components';
import Filter, { FilterType } from './components/Filter';
import PensionCard from './components/PensionCard';
import { Container, PensionList } from './styles';

const Pensions = () => {
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [filteredData, setFilteredData] = useState<Pension[]>([]);

  const { pensions, isLoading, hasError, loadPensions } = usePension();

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Pension>) => {
    return <PensionCard {...item} />;
  }, []);

  const RenderHeader = useCallback(() => {
    return <Filter filters={filters} onChange={setFilters} />;
  }, [filters]);

  const renderListEmptyComponent = useCallback(() => {
    if (hasError) {
      return (
        <Error
          infoText="Não foi possível se conectar ao banco de previdências."
          onPress={loadPensions}
        />
      );
    }

    return (
      <EmptyData
        title="Sem previdências"
        tip="Nenhum resultado foi encontrado para os filtros selecionados."
      />
    );
  }, [hasError, loadPensions]);

  const filterData = useCallback(() => {
    let data = [...pensions];

    if (filters.length > 0) {
      data = pensions.filter((pension: Pension) => {
        if (filters.includes('100') && pension.minimumValue === 100) {
          return pension;
        }

        if (filters.includes('noTax') && pension.tax === 0) {
          return pension;
        }

        if (filters.includes('d+1') && pension.redemptionTerm === 1) {
          return pension;
        }

        return null;
      });
    }

    setFilteredData(data);
  }, [filters, pensions]);

  useEffect(() => {
    loadPensions();
  }, []);

  useEffect(() => {
    setFilteredData(pensions);
  }, [pensions]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <PensionList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmptyComponent}
        ListHeaderComponent={RenderHeader}
        stickyHeaderIndices={[0]}
      />
    </Container>
  );
};

export default Pensions;
