import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Subtitle } from '~/styles/typography';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const InfoText = styled(Subtitle)`
  margin: 8px 0 16px;
  text-align: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  padding: 8px 15px;
`;

export const ButtonLabel = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.white};
`;
