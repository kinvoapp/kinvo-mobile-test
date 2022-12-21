import styled from 'styled-components/native';
import { View } from 'react-native';
import { DivisorInLineProps } from './DivisorInLine';

export const Container = styled(View) <Pick<DivisorInLineProps, 'isPadding'>>`
  padding: ${({ theme, isPadding }) => theme.size.padding[isPadding]}px 0;

  background-color: transparent;
`;

export const Line = styled(View)`
  height: 1px;

  background-color: ${({ theme }) => theme.colors.card.border.default};
`;
