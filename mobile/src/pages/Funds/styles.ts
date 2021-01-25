import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

import { FundsProps } from '.';

interface ClosedProps {
  closed?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const FundsList = styled(FlatList as new () => FlatList<FundsProps>)`
  flex: 1;

  padding: 20px 20px;

  background: #ecf0f2;
`;

export const FundsItem = styled.TouchableOpacity<ClosedProps>`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 20px;

  border-width: 1px;
  border-radius: 10px;
  border-color: #dae0e3;

  background: ${props => (props.closed ? '#f7f8f8' : '#ffffff')};
`;

export const FundsTextContainer = styled.View`
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
`;

export const FundNameText = styled.Text<ClosedProps>`
  max-width: 70%;

  font-family: 'Montserrat-Bold';
  font-size: 16px;

  color: #627179;

  ${props =>
    props.closed &&
    css`
      opacity: 0.5;
    `};
`;

export const FundTypeText = styled.Text<ClosedProps>`
  margin-top: 5px;

  font-family: 'Montserrat-SemiBold';
  font-size: 12px;

  color: #627179;

  ${props => props.closed
    && css`
      opacity: 0.5;
    `};
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 15px;

  border-radius: 1px;

  background-color: #dae0e3;
  opacity: 0.7;
`;
