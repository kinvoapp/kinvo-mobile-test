import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
    padding-top: 20px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    padding-bottom:${height * 0.15}px;
`;