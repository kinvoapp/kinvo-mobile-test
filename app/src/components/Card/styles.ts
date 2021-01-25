import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const CardBoxButton = styled(RectButton)`
  justify-content: center;
  margin: 15px auto;
  background-color: #fff;
  width: 340px;
  height: 130px;
  border-radius: 10px;
`;

export const Wrapper = styled.View`
  margin-left: 34px;
  align-items: center;
  flex-direction: row;
`;

export const ImageCircle = styled.View`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-color: #ecf0f2;
`;

export const WrapperText = styled.View`
  flex-direction: column;
  margin-left: 12px;
`;

export const TitleCard = styled.Text`
  font-size: 18px;
  font-family: 'Montserrat-Bold';
  color: #6f4dbf;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;

export const ImageInsideTheCircle = styled.Image`
  width: 28.32px;
  height: 28.32px;
`;

export const New = styled.View`
  display: flex;
  align-items: center;
  width: 56px;
  height: 20px;
  background-color: #40C5D6;
  border-radius: 10px;
  margin-left: 40px;
`;

export const NewText = styled.Text`
  color: #fff;
  font-family: 'Montserrat-Medium';
`;
