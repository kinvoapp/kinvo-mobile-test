import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  max-width: 230px;
  margin: auto;
`;

export const Text = styled.Text`
  ${(props) =>
    props.title &&
    css`
      font-size: 16px;
      line-height: 20px;
      color: #627179;
      font-family: 'Montserrat-Bold';
    `}
  ${(props) =>
    props.subtitle &&
    css`
      font-size: 12px;
      line-height: 20px;
      color: #627179;
      font-family: 'Montserrat-Medium';
      text-align: center;
      margin: 20px 0;
    `}
  ${(props) => props.button
    && css`
      font-size: 12px;
      line-height: 20px;
      color: #ffffff;
      font-family: 'Montserrat-SemiBold';
    `}
`;

export const Button = styled.TouchableOpacity`
  width: 179px;
  height: 32px;
  border-radius: 16px;
  background-color: #6f4dbf;
  align-items: center;
  justify-content: center;
`;
