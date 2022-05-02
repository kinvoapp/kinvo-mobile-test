import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const {height, width} = Dimensions.get("screen")

export const Container = styled.View`
    width: 100%;
    height: ${height * 0.28}px;
    margin:15px;
    padding-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.mediumGreyColor};
`;