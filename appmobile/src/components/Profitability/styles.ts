import styled, { css } from 'styled-components/native';
import color from '../../styles/colors';

interface ProfitabilityValueProps {
  isPositive: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfitabilityValue = styled.Text<ProfitabilityValueProps>`
  margin-left: 5px;
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${color.WARNING};

  ${props =>
    props.isPositive &&
    css`
      color: ${color.GREEN};
    `}
`;
