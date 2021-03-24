import styled, { css } from "styled-components";
import { fonts, colors } from "../../../styles";

export const Container = styled.View`
  ${() => css`
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${() => css`
    font-family: ${fonts.bold};
    color: ${colors.tertiaryGray};
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
  `}
`;

export const Button = styled.TouchableOpacity`
  ${() => css`
    background-color: ${colors.primaryPurple};
    padding: 5px 20px;
    border-radius: 50px;
    margin-top: 10px;
  `}
`;

export const Text = styled.Text`
  ${({ button }) => css`
    font-family: ${button ? fonts.semiBold : fonts.medium};
    color: ${button ? colors.white : colors.tertiaryGray};
    text-align: center;
    font-size: 12px;
  `}
`;
