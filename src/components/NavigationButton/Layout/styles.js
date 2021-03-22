import styled, { css } from "styled-components";
import { fonts, colors } from "../../../styles";

export const NavigationContainer = styled.TouchableOpacity`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.white};
    height: 120px;
    border-radius: 8px;
    elevation: 1;
    padding: 0 20px;
    margin-bottom: 20px;
  `}
`;

export const Content = styled.View`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

export const IconContainer = styled.View`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primaryGray};
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin-right: 10px;
  `}
`;

export const TextContainer = styled.View`
  ${() => css`
    display: flex;
    height: 100%;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${() => css`
    font-family: ${fonts.bold};
    font-size: 16px;
    color: ${colors.primaryPurple};
    margin-bottom: 2px;
  `}
`;

export const Description = styled.Text`
  ${() => css`
    font-family: ${fonts.semiBold};
    font-size: 10px;
    color: ${colors.tertiaryGray};
  `}
`;
