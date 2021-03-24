import styled, { css } from "styled-components";
import { fonts, colors } from "../../../styles";

export const Container = styled.View`
  ${() => css`
    padding: 20px;
    justify-content: center;
    flex: 1;
    background-color: ${colors.secondaryGray};
  `}
`;

export const Text = styled.Text`
  ${() => css`
    font-family: ${fonts.medium};
    font-size: 12px;
    align-self: center;
    text-align: center;
    width: 200px;
    color: ${colors.tertiaryGray};
  `}
`;
