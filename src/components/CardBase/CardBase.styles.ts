import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  height: ${RFValue(120)}px;

  padding: 0 ${({ theme }) => RFValue(theme.size.padding.default)}px;
  margin-top: ${({ theme }) => RFValue(theme.size.padding.default)}px

  border-radius: ${({ theme }) => RFValue(theme.size.borderRadius.default)}px;
  border-color: ${({ theme }) => theme.colors.card.border.default}px;
  border-width: 1px;

  background-color: ${({ theme }) => theme.colors.app.white};
`;
