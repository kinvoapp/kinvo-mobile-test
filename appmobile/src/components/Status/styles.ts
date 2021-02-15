import styled, { css } from 'styled-components/native';

import { colors, colorsLight } from '../../styles/colors';

export const Container = styled.View``;
interface TextProps {
  isClosed: boolean;
}

export const Title = styled.Text<TextProps>`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  padding: 3px 10px;
  border-radius: 10px;
  color: ${colors.WHITE};
  background: ${colors.SECONDARY};

  ${props =>
    props.isClosed &&
    css`
      background: ${colorsLight.SECONDARY};
    `}
`;
