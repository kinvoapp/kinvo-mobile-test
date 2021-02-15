import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: ${colors.BLACK};
`;

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-family: 'Montserrat-Medium';
  font-size: 12px;
  color: ${colors.BLACK};
  width: 70%;
  text-align: center;
`;

export const ButtonTryAgain = styled.TouchableOpacity`
  margin-top: 20px;
  background: ${colors.PRIMARY};
  padding: 10px 30px;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${colors.WHITE};
  font-size: 12px;
`;
