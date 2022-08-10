import styled from 'styled-components/native';
import {
  Container
} from '../../styles/card.styles';

export const Content = styled(Container)`
  width: 320px;
  height: 185px;
`;
export const Status = styled.Text`
  padding: 4px 15px;

  background: ${props => props.closed ? ({theme})=>theme.colors.closed : ({theme})=>theme.colors.badge};

  color: #fff;
  border-radius: 100px;
`;