import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const CardContainer = styled.View`
  justify-content: center;
  padding: 5px 17px;
  margin: auto;
  margin-top: 20px;
  width: 320px;
  min-height: 145px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #dae0e3;
`;

export const CardHeader = styled.View`
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
  flex-direction: row;
`;

export const FavoriteButton = styled(RectButton)``;

export const FavoriteImage = styled.Image``;

export const CardFooter = styled.View`
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
`;

