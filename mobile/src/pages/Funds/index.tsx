import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';

import Field from '../../components/Field';
import Header from '../../components/Header';
import Status from '../../components/Status';
import api from '../../services/api';

import {
  Container,
  FundsList,
  FundsItem,
  FundsTextContainer,
  FundNameText,
  FundTypeText,
  Separator,
} from './styles';

export interface FundsProps {
  id: number;
  name: string;
  type: string;
  rating: number;
  minimumValue: number;
  profitability: number;
  status: number;
}

interface FundsResponse {
  success: boolean;
  data: FundsProps[];
  error: string | null;
}

const Funds: React.FC = () => {
  const [funds, setFunds] = useState<FundsProps[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function loadFunds(): Promise<void> {
      if (!isFetching) return;

      try {
        const result = await api.get<FundsResponse>('/funds');

        const { data } = result.data;

        data.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });

        setFunds(data);
      } catch (err) {
        //
      }
      setIsFetching(false);
    }

    loadFunds();
  }, [isFetching]);

  return (
    <Container>
      <Header goBack>Fundos</Header>
      <FundsList
        data={funds}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => setIsFetching(true)}
            colors={['#6f4dbf']}
          />
        }
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{
          height: 80,
        }}
        renderItem={({ item }) => (
          <FundsItem closed={item.status === 2}>
            <FundsTextContainer>
              <FundNameText closed={item.status === 2}>
                {item.name}
              </FundNameText>
              {item.status > 0 && (
                <Status type={item.status === 1 ? 'new' : 'closed'} />
              )}
            </FundsTextContainer>
            <FundTypeText closed={item.status === 2}>{item.type}</FundTypeText>
            <Separator />
            <Field
              label="Classificação"
              type="rating"
              color={item.status === 2 ? '#627179' : undefined}
              opacity={item.status === 2 ? 0.5 : 1}
              style={{ marginTop: 10 }}
            >
              {item.rating}
            </Field>
            <Field
              label="Valor Mínimo"
              type="value"
              opacity={item.status === 2 ? 0.5 : 1}
              style={{ marginTop: 15 }}
            >
              {item.minimumValue}
            </Field>
            <Field
              label="Rentabilidade"
              type="percent"
              opacity={item.status === 2 ? 0.5 : 1}
              style={{ marginTop: 15 }}
            >
              {item.profitability}
            </Field>
          </FundsItem>
        )}
      />
    </Container>
  );
};

export default Funds;
