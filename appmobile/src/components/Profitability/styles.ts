import styled, { css } from 'styled-components/native';
import { color, colorLight } from '../../styles/colors';

interface ProfitabilityValueProps {
  isPositive: string;
  isClosed?: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfitabilityValue = styled.Text<ProfitabilityValueProps>`
  margin-left: 5px;
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;

  ${({ isPositive, isClosed }) =>
    isPositive === 'POSITIVE'
      ? css`
          color: ${color.GREEN};
        `
      : isPositive === 'NEGATIVE'
      ? css`
          color: ${color.WARNING};
        `
      : isClosed === 'CLOSED'
      ? css`
          color: ${colorLight.BLACK};
        `
      : css`
          color: ${color.PRIMARY};
        `}
`;
