import React, { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import Pension from '../../@types/pension';
import { Header, Spinner, FilterItem, NetworkError } from '../../components';
import api from '../../services/api';
import PensionItem from './PensionItem';
import { Container, Content, FilterList } from './styles';

const PrivatePensions: React.FC = () => {
  const [pensions, setPensions] = useState<Pension[]>([]);
  const [pensionsFilted, setPensionsFilted] = useState<Pension[]>([]);

  const [noTaxFilter, setNoTaxFilter] = useState(false);
  const [hundredFilter, setHundredFilter] = useState(false);
  const [d1Filter, setD1Filter] = useState(false);

  const [networkError, setNetworkError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPension = useCallback(async () => {
    try {
      setNetworkError(false);
      setLoading(true);
      const response = await api.get('pension');
      const { data } = response.data;
      setPensions(() => {
        const newState = [...data];
        newState.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name === b.name) return 0;
          return 1;
        });

        return newState;
      });
    } catch (error) {
      setNetworkError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPension();
  }, [fetchPension]);

  const applyFilters = useCallback(() => {
    setPensionsFilted(() => {
      if (!noTaxFilter && !hundredFilter && !d1Filter) return [];

      let newState = [...pensions];

      if (noTaxFilter) newState = newState.filter(pension => pension.tax === 0);

      if (hundredFilter)
        newState = newState.filter(pension => pension.minimumValue >= 100);

      if (d1Filter)
        newState = newState.filter(pension => pension.redemptionTerm === 1);

      return newState;
    });
  }, [pensions, noTaxFilter, hundredFilter, d1Filter]);

  useEffect(() => {
    applyFilters();
  }, [noTaxFilter, hundredFilter, d1Filter, applyFilters]);

  const handleToggleNoTaxFilted = useCallback(() => {
    setNoTaxFilter(state => !state);
  }, []);

  const handleToggleHundredFilter = useCallback(() => {
    setHundredFilter(state => !state);
  }, []);

  const handleToggleD1Filter = useCallback(() => {
    setD1Filter(state => !state);
  }, []);

  return (
    <Container>
      <Header title="Previdências" backButton />
      <Content>
        {loading && <Spinner />}
        {networkError && (
          <NetworkError
            subtitle="Não foi possível se conectar ao banco de fundos."
            onPress={fetchPension}
          />
        )}
        {!loading === !networkError && (
          <>
            <FilterList>
              <FilterItem title="sem taxa" onPress={handleToggleNoTaxFilted} />
              <FilterItem
                title="R$ 100,00"
                onPress={handleToggleHundredFilter}
              />
              <FilterItem title="D+1" onPress={handleToggleD1Filter} />
            </FilterList>
            <FlatList
              data={pensionsFilted.length ? pensionsFilted : pensions}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <PensionItem pension={item} />}
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default PrivatePensions;
