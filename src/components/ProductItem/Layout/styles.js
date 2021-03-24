import styled, { css } from "styled-components";
import { fonts, colors } from "../../../styles";

export const Container = styled.View`
  ${({ status }) => css`
    display: flex;
    background-color: ${
      status == 2 ? "rgba(247, 248, 248, 0.5)" : colors.white
    };
    border: 1px;
    border-color: ${colors.primaryGray}
    border-radius: 8px;
    padding: 15px;
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
  ${({ status }) => css`
    font-family: ${fonts.bold};
    font-size: 16px;
    color: ${colors.tertiaryGray};
    opacity: ${status == 2 ? 0.5 : 1};
  `}
`;

export const ProductSubtitle = styled.Text`
  ${({ status }) => css`
    font-family: ${fonts.semiBold};
    font-size: 12px;
    color: ${colors.tertiaryGray};
    opacity: ${status == 2 ? 0.5 : 1};
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
  ${({ status }) => css`
    font-family: ${fonts.medium};
    font-size: 10px;
    color: ${colors.tertiaryGray};
    opacity: ${status == 2 ? 0.5 : 1};
  `}
`;

export const ProductKeyValueContainer = styled.View`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

export const ProductKeyValue = styled.Text`
  ${({ status }) => css`
    font-family: ${fonts.semiBold};
    font-size: 12px;
    color: ${colors.tertiaryGray};
    opacity: ${status == 2 ? 0.5 : 1};
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
  ${({ profitability, status }) => css`
    font-family: ${fonts.semiBold};
    font-size: 12px;
    color: ${status == 2
      ? colors.tertiaryGray
      : handleProfitabilityColor(profitability)};
    opacity: ${status == 2 ? 0.5 : 1};
  `}
`;
