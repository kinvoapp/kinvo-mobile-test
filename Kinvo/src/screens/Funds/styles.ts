import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { FundsStyle } from './types';

const { height } = Dimensions.get("screen")

export const Container = styled.View<FundsStyle>`
    width: 100%;
    height: ${height * 0.65}px;
    align-items: center;
    justify-content: ${({ verticalAlign }) => verticalAlign === "center" ? "center" : "flex-start"};
`;