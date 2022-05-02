import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { IBoxContainer } from './types';

const { height, width } = Dimensions.get("screen")

export const Container = styled.View<IBoxContainer>`
    width: ${width * 0.89}px;
    margin: 0 20px 20px 20px;
    padding: 15px;
    align-items: center;
    background-color: ${({ theme, type }) => type === 2 ? "#F7F8F8" : theme.colors.white};
    border:1px solid ${({ theme }) => theme.colors.mediumGreyColor};
    border-radius: 10px
`;