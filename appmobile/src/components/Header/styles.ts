import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.WHITE};
  flex-direction: row;
  align-items: center;
  padding: 40px 0 40px 20px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 20px;
  padding: 10px 12px;
  background: ${colors.PRIMARY};
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Bold';
  color: ${colors.PRIMARY};
`;
