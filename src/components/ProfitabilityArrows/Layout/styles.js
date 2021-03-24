import styled, { css } from "styled-components";

export const Container = styled.View`
  ${({ profitability }) => css`
    margin-right: 5px;
    transform: ${profitability < 0 ? "rotate(180deg)" : ""};
  `}
`;
