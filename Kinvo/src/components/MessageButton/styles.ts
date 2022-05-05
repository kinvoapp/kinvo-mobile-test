import styled from 'styled-components/native';
import fonts from '../../themes/fonts';

export const ButtonContainer = styled.TouchableOpacity`
    margin-top: 20px;
    padding: 10px 22px;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.purple};
`;

export const ButtonText = styled.Text`
    font-size: 12px;
    font-family: ${fonts.montserratSemiBold}; 
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;