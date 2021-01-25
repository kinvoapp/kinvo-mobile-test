import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

import { PensionProps } from '.';

interface ClosedProps {
  closed?: boolean;
}

interface FilterButtonProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const FilterContainer = styled.View`
  flex-direction: row;

  width: 100%;
  padding: 20px 20px;

  justify-content: space-between;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  width: 93px;
  padding: 10px 10px;

  border-radius: 20px;

  background: ${props => (props.selected ? '#6f4dbf' : '#ffffff')};

  align-items: center;
`;

export const FilterButtonText = styled.Text<FilterButtonProps>`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;

  color: ${props => (props.selected ? '#ffffff' : '#627179')};
`;

export const PensionsList = styled(
  FlatList as new () => FlatList<PensionProps>,
)`
  flex: 1;

  padding: 20px 20px;

  background: #ecf0f2;
`;

export const PensionsItem = styled.TouchableOpacity<ClosedProps>`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 20px;

  border-width: 1px;
  border-radius: 10px;
  border-color: #dae0e3;

  background: ${props => (props.closed ? '#f7f8f8' : '#ffffff')};
`;

export const PensionTopContainer = styled.View`
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
`;

export const PensionNameText = styled.Text<ClosedProps>`
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

export const PensionTypeText = styled.Text<ClosedProps>`
  margin-top: 5px;

  font-family: 'Montserrat-SemiBold';
  font-size: 12px;

  color: #627179;

  ${props =>
    props.closed &&
    css`
      opacity: 0.5;
    `};
`;

export const Separator = styled.View`
  width: auto;
  height: 1px;
  margin-top: 15px;

  border-radius: 1px;

  background-color: #dae0e3;
  opacity: 0.7;
`;
