import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex: 0.2;
  background: #ffffff;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
