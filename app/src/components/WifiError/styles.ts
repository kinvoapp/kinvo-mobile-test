import styled from 'styled-components/native';

export const View = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 179px;
  height: 32px;
  background-color: #6f4dbf;
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #fff;
  font-family: 'Montserrat-SemiBold';
`;
