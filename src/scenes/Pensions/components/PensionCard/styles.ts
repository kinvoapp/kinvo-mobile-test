import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 16px;
`;

export const Header = styled.View`
  margin-bottom: 15px;
`;

export const InfoContainer = styled.View`
  margin-top: 10px;
`;
