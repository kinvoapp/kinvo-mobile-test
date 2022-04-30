import { Platform, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

const paddingTop = Platform.select({
  ios: getStatusBarHeight(),
  default: 0,
});

export const HeaderContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};
  padding: ${paddingTop + 36}px 20px 36px;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  margin-right: 24px;
  padding: 10px;
`;

export const TitleContent = styled.View`
  justify-content: center;
`;
