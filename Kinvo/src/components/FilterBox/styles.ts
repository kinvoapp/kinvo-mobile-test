import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get("screen")

export const Container = styled.View`
    width: ${width * 0.89}px;
    flex-wrap: wrap;
    margin: 0 20px 20px 20px;
    padding-bottom: 14px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.mediumGrey};
`;