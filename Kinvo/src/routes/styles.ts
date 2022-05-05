import styled from 'styled-components/native';
import fonts from '../themes/fonts';

export const HeaderLeft = styled.View`
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.colors.purple};
`;

export const HeaderButton = styled.Text`
    margin-left: 15px;
    font-size: 20px;
    font-family: ${fonts.montserratBold}; 
    color: ${({ theme }) => theme.colors.purple};
`;