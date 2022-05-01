import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const MainText = styled.Text`
  color: #627179;
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  margin-bottom: 12px;
`;

export const SubText = styled.Text`
  color: #627179;
  font-family: 'Montserrat-Medium';
  font-size: 12px;
  margin-bottom: 20px;
`;

export const ReTryPressable = styled.Pressable`
  background-color: #6f4dbf;
  border-radius: 100px;
  width: 179px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const PressableText = styled.Text`
  color: #ffffff;
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
`;
