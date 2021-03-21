import styled from 'styled-components/native';
import Colors from '../../../resources/colors';

export const Button = styled.TouchableHighlight`
  padding: 9px 22px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.primary};
  border-radius: 100px;
  border: 1px solid ${Colors.gray03};
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  font-family: 'Montserrat';
  text-transform: uppercase;
`;
