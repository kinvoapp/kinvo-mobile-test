import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 32px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  ${(props) => props.active
    && css`
      background-color: #40c5d6;
    `}

  ${(props) => props.margin
    && css`
      margin: 0 20px;
    `}
`;

export const Text = styled.Text`
  font-size: 12px;
  line-height: 20px;
  color: #627179;
  font-family: 'Montserrat-SemiBold';
  text-align: center;
`;
