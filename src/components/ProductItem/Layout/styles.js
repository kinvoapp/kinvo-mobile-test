import styled, { css } from "styled-components";
import { fonts, colors } from "../../../styles";

export const Container = styled.View`
  ${() => css`
    display: flex;
    background-color: ${colors.white};
    border-radius: 8px;
    elevation: 1;
    padding: 20px;
    margin-bottom: 20px;
  `}
`;

export const Header = styled.View`
  ${() => css`
    display: flex;
    width: 100%;
    border-bottom-color: ${colors.primaryGray};
    border-bottom-width: 1px;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const ProductHeader = styled.View`
  ${() => css`
    display: flex;
    margin-bottom: 10px;
  `}
`;

export const ProductTitle = styled.Text`
  ${() => css`
    font-family: ${fonts.bold};
    font-size: 16px;
    color: ${colors.tertiaryGray};
  `}
`;

export const ProductSubtitle = styled.Text`
  ${() => css`
    font-family: ${fonts.semiBold};
    font-size: 12px;
    color: ${colors.tertiaryGray};
  `}
`;

export const InfoContainer = styled.View`
  ${() => css`
    display: flex;
    margin-top: 5px;
  `}
`;

export const ProductTextContainer = styled.View`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  `}
`;

export const ProductKeyName = styled.Text`
  ${() => css`
    font-family: ${fonts.medium};
    font-size: 10px;
    color: ${colors.tertiaryGray};
  `}
`;

export const ProductKeyValueContainer = styled.View`
  ${() => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const ProductKeyValue = styled.Text`
  ${() => css`
    font-family: ${fonts.semiBold};
    font-size: 12px;
    color: ${colors.tertiaryGray};
  `}
`;

const handleProfitabilityColor = (profitability) => {
  switch (true) {
    case 0:
      return colors.tertiaryGray;
    case profitability > 0:
      return colors.primaryGreen;
    case profitability < 0:
      return colors.primaryOrange;
    default:
      return colors.tertiaryGray;
  }
};

export const ProductKeyValueProfitability = styled.Text`
  ${({ profitability }) => css`
    font-family: ${fonts.semiBold};
    font-size: 12px;
    color: ${handleProfitabilityColor(profitability)};
  `}
`;
