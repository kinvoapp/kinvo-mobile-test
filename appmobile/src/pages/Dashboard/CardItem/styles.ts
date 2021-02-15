import styled from 'styled-components/native';

import { colors } from '../../../styles/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${colors.WHITE};
  margin-top: 20px;
  padding: 32px 20px;
  border: 1px solid ${colors.BORDER};
  border-radius: 10px;
`;

export const ImageContent = styled.View`
  padding: 15px;
  background: ${colors.BACKGROUND};
  border-radius: 50px;
`;

export const TextView = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: ${colors.PRIMARY};
`;

export const Subtitle = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 10px;
  color: ${colors.BLACK};
`;
