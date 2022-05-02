import styled from 'styled-components/native';
import { Dimensions } from "react-native";

export const ButtonContainer = styled.View`
    margin-top: 20px;
    padding: 10px 22px;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.purple};
`;

export const ButtonText = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;