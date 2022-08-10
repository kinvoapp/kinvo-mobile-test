import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: ${RFValue(100)}px;

  padding: 0 ${({ theme }) => RFValue(theme.size.padding.default)}px;

  background-color: ${({ theme }) => theme.colors.app.white};
`;
