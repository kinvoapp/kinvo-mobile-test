import styled from 'styled-components/native';
import { Dimensions, PixelRatio } from "react-native";
import { IBoxHeader } from './types';

const { height, width } = Dimensions.get("screen")

export const Container = styled.View`
    display: flex;
    width: 100%;
    min-height: ${height * 0.05}px;
    margin:10px;
    padding-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.mediumGreyColor};
`;

export const ContainerLeft = styled.View`
    max-width: ${width * 0.65}px;   
    align-items: flex-start;
`;

export const ContainerRight = styled.View`
    max-width: ${width * 0.20}px;     
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export const FavoriteContainer = styled.TouchableOpacity`
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 5px;
    color: ${({ theme }) => theme.colors.darkGreyColor};
    
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGreyColor};
    
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
    color: ${({ theme }) => theme.colors.white};
`;