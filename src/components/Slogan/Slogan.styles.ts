import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  width: ${RFValue(56)}px;
  height: ${RFValue(20)}px;

  border-radius: ${({ theme }) => RFValue(theme.size.borderRadius.default)}px;

  background-color: ${({ theme }) => theme.colors.card.background.secondary};
`;
