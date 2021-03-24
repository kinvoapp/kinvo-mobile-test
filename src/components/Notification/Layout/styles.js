import styled, { css } from "styled-components";
import { fonts, colors } from "../../../styles";

const notificationContainerBgColors = {
  1: () => css`
    background-color: ${colors.primaryBlue};
  `,
  2: () => css`
    background-color: ${colors.quaternaryGray};
  `,
};

export const NotificationContainer = styled.View`
  ${({ status }) => css`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    align-items: center;
    ${notificationContainerBgColors[status]}
    padding: 2.5px 14px;
    border-radius: 30px;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    font-family: ${fonts.medium};
    font-size: 10px;
    color: ${colors.white};
  `}
`;
