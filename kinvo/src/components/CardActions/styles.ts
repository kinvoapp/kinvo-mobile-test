import styled, { css } from 'styled-components/native';

interface IColors {
  colors?: string;
}

export const Container = styled.View`
  width: 90%;
  height: 25%;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #fff;
  border-width: 1px;
  border-color: #dae0e3;
  padding: 17px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #627179;
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: bold;
`;

export const Ticker = styled.Text`
  color: #627179;
  font-size: 14px;
  font-family: 'Montserrat';
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #dae0e3;
  opacity: 0.5;
`;

export const Body = styled.View`
  align-items: center;
  margin-top: 15px;
`;

export const ContentPrices = styled.View`
  margin-top: 10px;
  height: 50%;
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

export const Price = styled.Text`
  color: #627179;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Montserrat';
`;
