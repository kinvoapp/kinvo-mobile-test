import styled from 'styled-components/native';

import {Platform} from 'react-native';

export const Container = styled.View`
  height: ${Platform.OS === 'ios' ? 100 + 20 : 100}px;
  background-color: ${({theme}) => theme.colors.white};
  padding: ${Platform.OS === 'ios' ? 40 + 20 : 40}px 20px 36px 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.grayBorder};
  flex-direction: row;
  align-items: center;
`;

export const Back = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {top: 10, bottom: 10, left: 10, right: 10},
})`
  width: 24px;
  height: 24px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 12px;
  margin-right: 13px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary};
`;
