import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { BoxHeaderStyle } from './types';
import fonts from '../../themes/fonts';

const { height, width } = Dimensions.get("screen")

export const Container = styled.View`
    display: flex;
    width: 100%;
    min-height: ${height * 0.05}px;
    margin:10px;
    padding-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.mediumGrey};
`;

export const ContainerLeft = styled.View`
    max-width: ${width * 0.6}px;   
`;

export const ContainerRight = styled.View`
    max-width: ${width * 0.20}px;     
    align-items: flex-end;
    margin-bottom: 20px;
`;

export const Title = styled.Text<BoxHeaderStyle>`
    font-size: 16px;
    font-family: ${fonts.montserratBold};
    padding-bottom: 5px;
    color: ${({ theme, closedType }) => closedType === 2 ? theme.colors.closedText : theme.colors.darkGrey};
    
`;

export const Subtitle = styled.Text<BoxHeaderStyle>`
    font-size: 12px;
    font-family: ${fonts.montserratSemiBold};
    color: ${({ theme, closedType }) => closedType === 2 ? theme.colors.closedText : theme.colors.darkGrey};
`;

export const NewStatusView = styled.View`
    background: ${({ theme }) => theme.colors.statusBlue};
    padding: 4px 15px; 
    border-radius: 10px;
`;

export const ClosedStatusView = styled.View`
    background: ${({ theme }) => theme.colors.statusGrey};
    padding: 4px 15px; 
    border-radius: 10px;
`;

export const StatusText = styled.Text`
    font-size: 10px;
    font-family: ${fonts.montserratMedium};
    color: ${({ theme }) => theme.colors.white};
`;