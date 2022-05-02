import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction:row;
    width: 100%;
    margin:15px 15px 0 15px;
    justify-content: space-between;
    align-items: center;
`;

export const ProfitabilityContainer = styled.View`
    flex-direction:row;
    align-items: center;
    justify-content: flex-end;
`;

export const ProfitabilityText = styled.View`
    margin-left: 5px;
`;

export const ProfitabilityIcon = styled.View`
    transform: rotate(180deg);
`;

export const Title = styled.Text`
    font-size: 10px;
    color: ${({ theme }) => theme.colors.textNormal};
`;

export const Item = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textNormal};
`;

export const StatusView = styled.View`
    background: ${({ theme }) => theme.colors.statusBlue};
    padding: 4px 15px; 
    border-radius: 10px;
`;

export const StatusText = styled.Text`
    font-size: 10px;
    color: ${({ theme }) => theme.colors.white};
`;

export const PositiveNumber = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.green};
`;
export const NegativeNumber = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.red};
`;

export const BoxText = styled.Text`
font-size: 12px;
font-weight: 500;
color: ${({ theme }) => theme.colors.textNormal};
`;