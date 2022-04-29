import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

const marginBottom = Platform.select({
  ios: getBottomSpace(),
  default: 0,
});

const ContainerAttrs = () => ({
  showsVerticalScrollIndicator: false,
  padding: 20,
  marginBottom,
});

export const Container = styled.ScrollView.attrs(ContainerAttrs)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
