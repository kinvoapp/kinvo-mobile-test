import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const TextTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;

`;

export const TextSubTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TextButton = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonLink = styled(RectButton)`
  background: #6F4DBF;
  width: 60%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  
`;


