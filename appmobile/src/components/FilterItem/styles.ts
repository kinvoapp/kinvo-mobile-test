import styled, { css } from 'styled-components/native';

import { color } from '../../styles/colors';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${color.WHITE};
  padding: 8px 15px;
  border-radius: 20px;

  ${props =>
    props.isActive &&
    css`
      background: ${color.PRIMARY};
    `}
`;

export const Title = styled.Text<ContainerProps>`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${color.BLACK};
  text-transform: uppercase;

  ${props =>
    props.isActive &&
    css`
      color: ${color.WHITE};
    `}
`;
