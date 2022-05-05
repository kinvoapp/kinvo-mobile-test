import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import fonts from '../../themes/fonts';
import { FilterButtonStyle } from './types';

const { height, width } = Dimensions.get("screen")

export const Container = styled.View<FilterButtonStyle>`
    min-width: ${width * 0.25}px;
    min-height: ${height * 0.034}px;
    align-items: center;
    justify-content: center;
    margin: 6px 2px;
    padding:2px 10px;
    border-radius: 100px;
    background-color: ${({ theme, status }) => status ? theme.colors.purple : theme.colors.white};
`;

export const Text = styled.Text<FilterButtonStyle>`
    font-size: 12px;
    font-family: ${fonts.montserratSemiBold}; 
    color: ${({ theme, status }) => status ? theme.colors.white : theme.colors.darkGrey};
`;