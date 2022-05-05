import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import fonts from '../../themes/fonts';

const { height, width } = Dimensions.get("screen")

export const Container = styled.TouchableOpacity`
    width: ${width * 0.88}px;
    height: ${height * 0.1}px;
    padding:32px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const ContainerLeft = styled.View`
    width: 56px;
    height: 56px;
    margin-right:12px;
    padding-top:5px;
    padding-left:2px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.lightGrey};
`;

export const ContainerCenter = styled.View`
    width: ${width * 0.46}px;
    height: ${height * 0.06}px;  
    justify-content: center;
    align-items: flex-start;
`;

export const ContainerRight = styled.View`
    width: ${width * 0.21}px;
    height: ${height * 0.06}px;  
    justify-content: center;
    align-items: flex-end;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${fonts.montserratBold};
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.purple};
`;

export const Subtitle = styled.Text`
    font-size: 10px;
    font-family: ${fonts.montserratSemiBold};
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StatusView = styled.View`
    background: ${({ theme }) => theme.colors.statusBlue};
    padding: 4px 15px; 
    border-radius: 10px;
    margin-right: 20px; 
`;

export const StatusText = styled.Text`
    font-size: 10px;
    font-family: ${fonts.montserratMedium};
    color: ${({ theme }) => theme.colors.white};
`;