import styled from 'styled-components/native';

export const Container = styled.View`
  height: 150px;
  background: #ffffff;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 20px 0 20px;
  padding: 0 20px 0 20px;
`;

export const Containerleft = styled.View`
  width: 60%;
  border-radius: 50px;
`;

export const ContainerRight = styled.View`
  flex: 1;
  width: 30%;
  margin-left: 20px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TextTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 18px;
  font-weight: bold;
`;

export const TextSubTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 13px;
  margin-bottom: 15px;
`;

export const TextMinimo = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const TextRentabilidade = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: -15px;
`;

export const Img = styled.Image`
  margin-bottom: 15px;
`;

