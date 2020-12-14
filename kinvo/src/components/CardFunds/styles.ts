import styled from 'styled-components/native';

interface IColors {
  colors?: string;
}

interface IClose {
  close?: string;
}

export const Container = styled.View<IClose>`
  width: 320px;
  height: 180px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #fff;
  border-width: 1px;
  border-color: #dae0e3;
  padding: 17px;
  opacity: ${props => props.close || '1px'};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentHeader = styled.View`
  width: 180px;
`;

export const Title = styled.Text`
  color: #627179;
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #627179;
  font-size: 14px;
  font-family: 'Montserrat';
`;

export const ContentTag = styled.View`
  margin-top: -12px;
`;

export const CloseTag = styled.View`
  margin-top: 5px;
`;

export const Body = styled.View`
  align-items: center;
  margin-top: 16px;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #dae0e3;
  opacity: 0.5;
`;

export const ContentTitles = styled.View`
  margin-top: 10px;
  height: 70px;

  justify-content: space-between;
  align-items: flex-start;
`;

export const ContentPrices = styled.View`
  margin-top: 10px;
  height: 75px;
  margin-top: 5px
  justify-content: space-between;
  align-items: flex-end;
`;

export const Profitability = styled.Text`
  color: #627179;
  font-size: 12px;
  font-family: 'Montserrat';
`;

export const ValueMin = styled.Text`
  color: #627179;
  font-size: 12px;
  font-family: 'Montserrat';
`;

export const ContainerValues = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfitabilityNumber = styled.Text<IColors>`
  color: ${props => props.colors || '#aed335'};
  font-size: 15px;
  font-weight: bold;
  font-family: 'Montserrat';
`;

export const ProfitabilityNumberClose = styled.Text<IColors>`
  color: ${props => props.colors || '#627179'};
  font-size: 15px;
  font-weight: bold;
  font-family: 'Montserrat';
`;

export const Price = styled.Text`
  color: #627179;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Montserrat';
  letter-spacing: 0.7px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
