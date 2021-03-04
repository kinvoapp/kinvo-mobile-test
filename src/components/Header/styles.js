import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  elevation: 5;
  background-color: #ffffff;
  border: 1px solid #dae0e3;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
  margin-left: 12px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #6f4dbf;
  font-family: 'Montserrat-Bold';
  margin-left: 12px;
  padding-bottom: 2px;
`;
