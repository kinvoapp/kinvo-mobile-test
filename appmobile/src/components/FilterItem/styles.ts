import styled, { css } from 'styled-components/native';

import { colors } from '../../styles/colors';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${colors.WHITE};
  padding: 8px 15px;
  border-radius: 20px;

  ${props =>
    props.isActive &&
    css`
      background: ${colors.PRIMARY};
    `}
`;

export const Title = styled.Text<ContainerProps>`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${colors.BLACK};
  text-transform: uppercase;

  ${props =>
    props.isActive &&
    css`
      color: ${colors.WHITE};
    `}
`;
