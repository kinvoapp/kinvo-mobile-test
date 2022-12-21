import styled from 'styled-components/native';
import { ButtonSimpleProps } from './ButtonSimple';

export const Container = styled.TouchableOpacity<
  Omit<ButtonSimpleProps, 'children'>
>`
  align-items: center;
  justify-content: center;

  width: ${({ theme, size }) => theme.size.button[size]}px;
  height: ${32}px;

  border-radius: ${({ theme }) => 32 / theme.size.borderRadius.medium}px;

  background-color: ${({ theme, typeButton }) =>
    typeButton === 'primary'
      ? theme.colors.button.primary
      : theme.colors.button.secondary};
`;
