import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  height: 120px;

  padding: 0 ${({ theme }) => theme.size.padding.default}px;
  margin-top: ${({ theme }) => theme.size.padding.default}px;

  border-radius: ${({ theme }) => theme.size.borderRadius.default}px;
  border-color: ${({ theme }) => theme.colors.card.border.default}px;
  border-width: 1px;

  background-color: ${({ theme }) => theme.colors.app.white};
`;
