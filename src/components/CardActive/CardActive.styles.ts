import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const CircleIcon = styled.View`
  justify-content: center;
  align-items: center;

  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  margin-right: ${RFValue(12)}px;

  border-radius: ${RFValue(28)}px;

  background-color: ${({ theme }) => theme.colors.card.background.grayLight};
`;

export const Content = styled.View``;

export const New = styled.View`
  justify-content: center;
  align-items: center;

  width: ${RFValue(56)}px;
  height: ${RFValue(20)}px;

  position: absolute;
  right: 20px;

  border-radius: ${({ theme }) => RFValue(theme.size.borderRadius.default)}px;

  background-color: ${({ theme }) => theme.colors.card.background.secondary};
`;
