import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")

export const FavoriteContainer = styled.TouchableOpacity`
`;

export const MessageContainer = styled.View`
    width: 100%;
    margin-top: 40px;
    align-items: center;
`;

export const MessageContainerCenter = styled.View`
    width: 100%;
    height: ${height * 0.5}px;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`
    width: ${width * 0.58}px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkGreyColor};
    text-align: center;
`;
