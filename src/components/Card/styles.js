import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 320px;
  height: 120px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #dae0e3;

  margin-top: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #ecf0f2;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 29px;
  height: 29px;
`;

export const TextContainer = styled.View`
  margin-left: 11px;
  margin-right: auto;
`;

export const Text = styled.Text`
  ${(props) => props.title
    && css`
      font-size: 16px;
      line-height: 20px;
      color: #6f4dbf;
      font-family: 'Montserrat-Bold';
    `}

  ${(props) => props.subtitle
    && css`
      font-size: 10px;
      line-height: 22px;
      color: #627179;
      font-weight: 600;
      font-family: 'Montserrat-SemiBold';
    `}
`;
