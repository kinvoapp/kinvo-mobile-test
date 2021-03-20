import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 13%;
  width: 100%;
  padding-left: 20px;
  border: 1px;
  border-color: #dae0e3;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Bold';
  margin-left: 13px;
  color: #6f4dbf;
`;

export const NavigateBackContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 100px;
  background-color: #6f4dbf;
`;
