import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import fonts from '../../themes/fonts';

const { width } = Dimensions.get("screen")

export const MessageTitle = styled.Text`
    width: ${width * 0.6}px;
    font-size: 16px;
    font-family: ${fonts.montserratBold}; 
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-bottom: 12px;
`;

export const Message = styled.Text`
    width: ${width * 0.6}px;
    font-size: 12px;
    font-family: ${fonts.montserratMedium}; 
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    line-height: 20px;
`;