import styled, { css } from 'styled-components/native';

import { color, colorLight } from '../../styles/colors';

export const Container = styled.View``;
interface TextProps {
  isClosed: boolean;
}

export const Title = styled.Text<TextProps>`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  padding: 3px 10px;
  border-radius: 10px;
  color: ${color.WHITE};
  background: ${color.SECONDARY};

  ${props =>
    props.isClosed &&
    css`
      background: ${colorLight.SECONDARY};
    `}
`;
