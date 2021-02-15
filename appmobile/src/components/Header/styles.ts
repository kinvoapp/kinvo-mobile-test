import styled from 'styled-components/native';

import { color } from '../../styles/colors';

export const Container = styled.View`
  background: ${color.WHITE};
  flex-direction: row;
  align-items: center;
  padding: 40px 0 40px 20px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 20px;
  padding: 10px 12px;
  background: ${color.PRIMARY};
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Bold';
  color: ${color.PRIMARY};
`;
