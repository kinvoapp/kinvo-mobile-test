import styled, { css } from 'styled-components/native';

import { colors, colorsLight } from '../../styles/colors';

interface ProfitabilityValueProps {
  isPositive: boolean;
  isClosed?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfitabilityValue = styled.Text<ProfitabilityValueProps>`
  margin-left: 5px;
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;

  ${({ isPositive }) =>
    isPositive
      ? css`
          color: ${colors.GREEN};
        `
      : css`
          color: ${colors.WARNING};
        `}

  ${({ isClosed }) =>
    isClosed &&
    css`
      color: ${colorsLight.BLACK};
    `}
`;