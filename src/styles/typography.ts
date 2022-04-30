import styled from 'styled-components/native';

export const Heading1 = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 20px;
  text-align: center;
`;

export const Heading2 = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 16px;
  line-height: 20px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 12px;
  line-height: 22px;
`;

export const Body1 = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 12px;
  line-height: 22px;
`;

export const Body2 = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.MontserratMedium};
  font-size: 10px;
  line-height: 22px;
`;
