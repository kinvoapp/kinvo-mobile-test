import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 100px;
  background: #ffffff;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 20px 0 20px;
  padding: 0 20px 0 20px;
`;

export const ButtonTextTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #6f4dbf;
  font-size: 19px;
  font-weight: bold;
`;

export const ButtonTextSubTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 13px;
  font-weight: bold;
`;

export const ContainerIcon = styled.View`
  width: 20%;
  border-radius: 50px;
`;

export const ContainerText = styled.View`
  width: 70%;
  margin-left: 20px;
`;

export const Img = styled.Image`
  
  /* border-radius: 20px; */
`;