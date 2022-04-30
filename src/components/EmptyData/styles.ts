import styled from 'styled-components/native';
import { Body1, Heading1 } from '~/styles/typography';

export const EmptyDataContainer = styled.View`
  align-items: center;
  flex: 1;
  margin-top: 32px;
`;

export const Title = styled(Heading1)`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Tip = styled(Body1)`
  font-family: ${({ theme }) => theme.fonts.MontserratMedium};
  text-align: center;
`;
