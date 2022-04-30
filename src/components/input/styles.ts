import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 16;
  border: 1px solid #cecece;
`;
