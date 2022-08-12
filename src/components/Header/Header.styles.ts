import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: ${RFValue(100)}px;

  padding: 0 ${({ theme }) => RFValue(theme.size.padding.default)}px;

  background-color: ${({ theme }) => theme.colors.app.white};
`;

export const ButtonGoBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})`
  align-items: center;
  justify-content: center;

  height: ${RFValue(24)}px;
  width: ${RFValue(24)}px;

  margin-right: ${RFValue(10)}px;

  border-radius: ${RFValue(22)}px;

  background-color: transparent;
`;
