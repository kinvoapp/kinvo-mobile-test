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
  font-size: 16px;
  font-weight: bold;

`;

export const TextSubTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 12px;
  font-weight: bold;

`;

export const TextButton = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
`;

export const ButtonLink = styled(RectButton)`
  background: #6F4DBF;
  width: 50%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  
`;


