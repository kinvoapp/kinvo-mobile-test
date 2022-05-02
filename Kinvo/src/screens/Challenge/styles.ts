import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")

export const Container = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    justify-content: center;
    align-items: center;
    color: #000000;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    color: #000000;
`;