import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")

export const Message = styled.Text`
    width: ${width * 0.58}px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkGreyColor};
    text-align: center;
    line-height: 20px;
`;

export const MessageTitle = styled.Text`
    width: ${width * 0.58}px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGreyColor};
    text-align: center;
    padding-bottom: 12px;
`;
