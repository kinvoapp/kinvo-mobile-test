import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: #ecf0f2;
`;

export const HomeMenu = styled.View`
  flex: 1;

  padding: 20px 20px;

  background: #ecf0f2;
`;

export const HomeMenuItem = styled.TouchableOpacity`
  flex-direction: row;

  width: 100%;
  margin-bottom: 20px;
  padding: 20px 20px;

  border-width: 1px;
  border-radius: 10px;
  border-color: #dae0e3;

  background: #ffffff;

  align-items: center;
`;

export const LogoContainer = styled.View`
  width: 50px;
  height: 50px;

  margin-right: 12px;

  border-radius: 56px;

  background: #ecf0f2;

  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;

  color: #6f4dbf;
`;

export const SubtitleText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 10px;

  color: #627179;
`;
