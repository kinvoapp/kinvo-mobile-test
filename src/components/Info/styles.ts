import styled, { css } from 'styled-components/native';
import { Body1 } from '~/styles/typography';

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ValueContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

interface ValueTextProps {
  profitabilityType?: 'positive' | 'negative' | 'default';
}

export const ValueText = styled(Body1)<ValueTextProps>`
  ${({ profitabilityType }) =>
    profitabilityType &&
    profitabilityType === 'positive' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ profitabilityType }) =>
    profitabilityType &&
    profitabilityType === 'negative' &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;
