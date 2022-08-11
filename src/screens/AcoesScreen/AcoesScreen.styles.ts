import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 0 ${({ theme }) => RFValue(theme.size.padding.default)}px;
`;
