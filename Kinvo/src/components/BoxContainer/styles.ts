import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { BoxContainerStyle } from './types';

const { width } = Dimensions.get("screen")

export const Container = styled.View<BoxContainerStyle>`
    width: ${width * 0.89}px;
    margin: 0 20px 20px 20px;
    padding: 15px;
    align-items: center;
    background-color: ${({ theme, closedType }) => closedType === 2 ? theme.colors.closedBackground : theme.colors.white};
    border:1px solid ${({ theme }) => theme.colors.mediumGrey};
    border-radius: 10px
`;