import styled, { css } from "styled-components";
import { fonts, colors } from "../../../styles";

export const FiltersContainer = styled.View`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 15px;
    border-bottom-color: ${colors.primaryGray};
    border-bottom-width: 1px;
    margin-bottom: 20px;
  `}
`;

export const FiltersButton = styled.TouchableOpacity`
  ${({ isPressed }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: ${isPressed ? colors.primaryPurple : colors.white};
    min-height: 32px;
    min-width: 85px;
    border-radius: 50px;
  `}
`;

export const FiltersButtonText = styled.Text`
  ${({ isPressed }) => css`
    font-family: ${fonts.semiBold};
    font-size: 12px;
    color: ${isPressed ? colors.white : colors.tertiaryGray};
  `}
`;
