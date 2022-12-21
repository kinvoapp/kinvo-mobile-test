import { TouchableOpacity } from 'react-native';
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

  min-height: ${({ theme }) => theme.size.card.height.large}px;

  padding: ${({ theme }) => theme.size.padding.small}px;
  margin-top: ${({ theme }) => theme.size.padding.default}px;

  border-radius: ${({ theme }) => theme.size.borderRadius.default}px;
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

  height: 24px;
  width: 24px;

  border-radius: 22px;

  background-color: transparent;
`;
