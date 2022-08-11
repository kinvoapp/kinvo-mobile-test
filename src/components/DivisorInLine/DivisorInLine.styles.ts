import styled from 'styled-components/native';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DivisorInLineProps } from './DivisorInLine';

export const Container = styled(View) <Pick<DivisorInLineProps, 'isPadding'>>`
  padding: 0 ${({ theme, isPadding }) => theme.size.padding[isPadding]}px;

  background-color: transparent;
`;

export const Line = styled(View)`
  height: ${RFValue(1)}px;

  background-color: ${({ theme }) => theme.colors.card.border.default};
`;
