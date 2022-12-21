import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';
import { TextBaseProps } from './TextBase';

export const Container = styled(Text)<
  Pick<TextBaseProps, 'font' | 'weight' | 'color' | 'size'>
>`
  ${({ theme, color, weight, size, font }) => css`
    font-family: ${theme.fonts.primary[font]};
    font-weight: ${theme.fonts.weight[weight]};
    font-size: ${
      size ? theme.size.scaleFont[size] : theme.size.scaleFont.default - 2
    }px;
    line-height: ${
      size
        ? theme.size.scaleFont[size] * theme.size.styles.lineHeight
        : theme.size.scaleFont.default * theme.size.styles.lineHeight
    }px
    color: ${theme.colors.text[color]};
  `};
  font-style: normal;
`;
