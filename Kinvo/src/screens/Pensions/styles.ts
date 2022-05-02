import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get("screen")

export type PensionsProps = {
    type: 'selected' | 'unselected';
}

export const FilterContainer = styled.View`
    width: ${width * 0.89}px;
    margin: 0 20px 20px 20px;
    padding-bottom: 20px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.mediumGreyColor};
`;

export const FilterView = styled.TouchableOpacity<PensionsProps>`
    padding: 9px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${({ theme, type }) => type === 'selected' ? theme.colors.purple : theme.colors.white};
`;

export const FilterText = styled.Text<PensionsProps>`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme, type }) => type === 'selected' ? theme.colors.white : theme.colors.darkGreyColor};
`;

export const MessageContainer = styled.View`
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