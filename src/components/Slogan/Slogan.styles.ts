import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 20px;

  border-radius: ${({ theme }) => theme.size.borderRadius.default}px;

  background-color: ${({ theme }) => theme.colors.card.background.secondary};
`;
