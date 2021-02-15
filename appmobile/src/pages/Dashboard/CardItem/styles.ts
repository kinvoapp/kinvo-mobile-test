import styled from 'styled-components/native';

import { color } from '../../../styles/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${color.WHITE};
  margin-top: 20px;
  padding: 32px 20px;
  border: 1px solid ${color.BORDER};
  border-radius: 10px;
`;

export const ImageContent = styled.View`
  padding: 15px;
  background: ${color.BACKGROUND};
  border-radius: 50px;
`;

export const TextView = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: ${color.PRIMARY};
`;

export const Subtitle = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 10px;
  color: ${color.BLACK};
`;
