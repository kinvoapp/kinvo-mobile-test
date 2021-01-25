import styled, { css } from 'styled-components/native';

interface PercentageValueProps {
  isProfitability: number;
  disabled: boolean;
}

export const View = styled.View`
  width: 100%;
  margin-top: 13px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfitabilityIcon = styled.Image<PercentageValueProps>`
  margin-right: 5px;
  ${props => props.disabled && css`
    tintColor: #627179;
    opacity: .5
  `}
`;

export const ProfitabilityValueText = styled.Text<PercentageValueProps>`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: #627179;
  opacity: ${(props => props.disabled ? .5 : 1)};
`;

export const ProfitabilityValuePercentage = styled.Text<PercentageValueProps>`
  font-size: 14px;
  font-family: 'Montserrat-SemiBold';
  color: ${(props => props.disabled ? '#627179' : (
    css`
      ${(props: PercentageValueProps) =>
        (props.isProfitability >= 0 ? '#aed335' : '#e85d1f')
      };
    `
  ))};
`;
