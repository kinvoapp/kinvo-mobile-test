import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 32px 20px;
`;

export const ImageContainer = styled.View`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  padding: 15px;
`;

export const InfoContainer = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 16px;
  line-height: 20px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 10px;
  line-height: 22px;
`;
