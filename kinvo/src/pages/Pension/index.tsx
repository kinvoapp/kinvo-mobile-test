import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { CardForecasts, PensionFilter } from '../../components';

import { Item, IPension } from '../../store/modules/pension/types';

import { RootDispatch, RootState } from '../../store';

import { Container, Content, FilterContent, Divider } from './styles';

interface IData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

const Pension: React.FC = () => {
  // const [data, setData] = useState<Array<IData>>([]);
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<RootDispatch>();

  const { loading, pensions } = useSelector(
    (state: RootState) => state.pension,
  );

  useEffect(() => {
    dispatch.pension.load();
  }, []);

  const renderItem = ({ item }) => (
    <CardForecasts
      name={item.name}
      type={item.type}
      minimumValue={item.minimumValue}
      tax={item.tax}
      redemptionTerm={item.redemptionTerm}
      profitability={item.profitability}
    />
  );

  return (
    <Container>
      {loading ? (
        <Content>
          <ActivityIndicator size="large" color="#6F4DBF" />
        </Content>
      ) : (
        <>
          <FilterContent>
            <PensionFilter />
            <Divider />
          </FilterContent>

          <FlatList
            data={pensions}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </>
      )}
    </Container>
  );
};

export default Pension;
