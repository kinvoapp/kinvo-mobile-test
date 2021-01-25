import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  width: 100%;
  padding: 40px 20px 36px 20px;

  border-width: 1px;
  border-color: #dae0e3;
  box-shadow: 0px 3px 20px #707b81;

  background: #ffffff;

  align-items: center;
`;

export const TitleText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 26px;

  color: #6f4dbf;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  margin-right: 13px;

  border-width: 0;
  border-radius: 24px;

  background: #6f4dbf;

  justify-content: center;
  align-items: center;
`;
