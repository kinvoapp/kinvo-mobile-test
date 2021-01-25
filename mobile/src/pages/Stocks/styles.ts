import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { StockProps } from '.';

export const Container = styled.View`
  flex: 1;

  background: #ecf0f2;
`;

export const StocksList = styled(FlatList as new () => FlatList<StockProps>)`
  flex: 1;

  padding: 20px 20px;

  background: #ecf0f2;
`;

export const StocksItem = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 20px;

  border-width: 1px;
  border-radius: 10px;
  border-color: #dae0e3;

  background: #ffffff;
`;

export const StockTextContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const StockNameText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;

  color: #627179;
`;

export const FavoriteButton = styled.TouchableWithoutFeedback``;

export const StockTickerText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;

  color: #627179;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 15px;

  border-radius: 1px;

  background-color: #dae0e3;
  opacity: 0.7;
`;
