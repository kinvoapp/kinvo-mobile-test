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
