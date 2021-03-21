import styled from 'styled-components/native';
import Colors from '../../../resources/colors';

interface Ihandle {
  isHandle: boolean;
}
export const Button = styled.TouchableHighlight<Ihandle>`
  min-width: 93px;
  padding: 9px 15px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p: Ihandle) => (p.isHandle ? Colors.primary : '#fff')};
  border-radius: 100px;
  border: 1px solid ${Colors.gray03};
`;

export const Text = styled.Text<Ihandle>`
  font-size: 12px;
  font-weight: 500;
  color: ${(p: Ihandle) => (p.isHandle ? '#fff' : Colors.gray01)};
  font-family: 'Montserrat';
  text-transform: uppercase;
`;
