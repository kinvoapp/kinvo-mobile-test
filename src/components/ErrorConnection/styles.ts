import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #627179;
  font-family: 'Montserrat-Bold';
  margin-bottom: 12px;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: #627179;
  font-family: 'Montserrat-Medium';
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  width: 179px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: #6f4dbf;
  border-radius: 25px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-family: 'Montserrat-SemiBold';
`;
