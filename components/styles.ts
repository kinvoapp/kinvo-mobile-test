import styled from "styled-components/native";
import colors from "../constants/colors";
import { LabelContainerProps } from "./types";

export const LabelContainer = styled.View<LabelContainerProps>`
    padding: 4px 15px 4px 15px;
    background-color: ${(props) => props.color ? props.color : colors.labelNew};
    border-radius: 10px;
    justify-content: center;
    height: 20px;
`;

export const LabelText = styled.Text`
    font-family: montserrat-medium;
    color: #ffffff;
    font-size: 10px;
`;
