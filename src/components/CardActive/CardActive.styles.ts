import styled from 'styled-components/native';

export const CircleIcon = styled.View`
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;

  margin-right: 12px;

  border-radius: 28px;

  background-color: ${({ theme }) => theme.colors.card.background.grayLight};
`;

export const Content = styled.View`
  flex: 1;
`;
