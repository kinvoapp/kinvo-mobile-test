import styled from 'styled-components/native';
import Colors from '../../resources/colors';

interface ItagContent {
  color?: string;
}
export const TagContent = styled.View<ItagContent>`
  border-radius: 100px;
  width: 56px;
  height: 20px;
  background: ${(p: ItagContent) => p.color || Colors.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagText = styled.Text`
  font-size: 10px;
  color: #fff;
  font-weight: 500;
  font-family: 'Montserrat';
`;
