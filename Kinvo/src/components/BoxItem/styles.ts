import styled from 'styled-components/native';
import fonts from '../../themes/fonts';
import { BoxItemStyle } from './types';


export const Container = styled.View`
    display: flex;
    flex-direction:row;
    width: 100%;
    margin:15px 15px 0 15px;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text<BoxItemStyle>`
    font-size: 10px;
    font-family: ${fonts.montserratMedium};
    color: ${({ theme, closedType }) => closedType === 2 ? theme.colors.closedText : theme.colors.darkGrey};
`;

export const Item = styled.Text<BoxItemStyle>`
    font-size: 12px;
    font-family: ${fonts.montserratSemiBold};  
    color: ${({ theme, closedType }) => closedType === 2 ? theme.colors.closedText : theme.colors.darkGrey};
`;

export const BoxText = styled.Text<BoxItemStyle>`
    font-size: 12px;
    font-family: ${fonts.montserratSemiBold}; 
    color: ${({ theme, closedType }) => closedType === 2 ? theme.colors.closedText : theme.colors.darkGrey};
`;

export const ProfitabilityContainer = styled.View`
    padding-top:4px;
    flex-direction:row;
    align-items: center;
    justify-content: flex-end;
`;

export const ProfitabilityText = styled.Text<BoxItemStyle>`
    font-size: 12px;
    margin-left: 5px;
    font-family: ${fonts.montserratSemiBold}; 
    color: ${({ theme, closedType, signValue }) => (closedType === 2) ? theme.colors.closedText : signValue === "positive" ? theme.colors.green : theme.colors.orange};
`;