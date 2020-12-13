import styled from 'styled-components/native';

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
