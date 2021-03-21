import styled from 'styled-components/native';
import Colors from '../../resources/colors';

export const Group = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${Colors.gray01};
  font-weight: bold;
  font-family: 'Montserrat';
`;

export const Subtitle = styled.Text`
  max-width: 228px;
  font-size: 12px;
  text-align: center;
  color: ${Colors.gray01};
  font-weight: 500;
  font-family: 'Montserrat';
  margin: 12px 0 20px;
`;
