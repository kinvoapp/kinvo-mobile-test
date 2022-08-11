import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { css } from 'styled-components';
import styled from 'styled-components/native';

const alignContent = css`
  align-item: center;
  justify-content: space-between;
`;

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`

  ${alignContent}

  height: ${({ theme }) => RFValue(theme.size.card.height.large)}px;

  padding: ${({ theme }) => RFValue(theme.size.padding.small)}px;
  margin-top: ${({ theme }) => RFValue(theme.size.padding.default)}px

  border-radius: ${({ theme }) => RFValue(theme.size.borderRadius.default)}px;
  border-color: ${({ theme }) => theme.colors.card.border.default}px;
  border-width: 1px;

  background-color: ${({ theme }) => theme.colors.app.white};
`;

export const Content = styled.View`
  flex-direction: row;

  width: 100%;

  ${alignContent};
`;

export const Footer = styled.View`
  width: 100%;

  ${alignContent};
`;

export const Row = styled.View`
  flex-direction: row;

  ${alignContent};
`;

export const ButtonFavorite = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})`
  align-items: center;
  justify-content: center;

  height: ${RFValue(24)}px;
  width: ${RFValue(24)}px;

  border-radius: ${RFValue(22)}px;

  background-color: transparent;
`;
