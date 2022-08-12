import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Stock } from '~services/client';

export const Container = styled.View`
  flex: 1;
`;

export const StockList = styled(FlatList as new () => FlatList<Stock[]>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 37,
  },
})`
  flex: 1;
  width: 100%;
`;
