import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';
import { TextBaseProps } from './TextBase';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(Text) <
  Pick<TextBaseProps, 'font' | 'weight' | 'color' | 'size'>
  >`
  ${({ theme, color, weight, size }) => css`
    font-family: ${theme.fonts.primary[weight]};
    font-weight: ${theme.fonts.weight[weight]};
    font-size: ${size
      ? RFValue(theme.size.scaleFont[size])
      : RFValue(theme.size.scaleFont.default - 2)
    }px;
    line-height: ${size
      ? RFValue(theme.size.scaleFont[size] * theme.size.styles.lineHeight)
      : RFValue(theme.size.scaleFont.default * theme.size.styles.lineHeight)
    }px
    color: ${theme.colors.text[color]};
  `};
  font-style: normal;
`;
