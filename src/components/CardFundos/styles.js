import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 320px;
  height: 185px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #dae0e3;

  margin: auto;
  margin-top: 16px;

  padding: 15px 20px;
`;

export const HeadContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  margin-right: auto;
  margin-top: 5px;
  flex: 1;
`;

export const Text = styled.Text`
  ${(props) => props.title
    && css`
      font-size: 16px;
      line-height: 20px;
      color: #627179;
      font-family: 'Montserrat-Bold';
    `}

  ${(props) => props.subtitle
    && css`
      width: 167px;
      height: 15px;
      font-size: 12px;
      color: #627179;
      font-family: 'Montserrat-SemiBold';
      text-transform: uppercase;
    `}

  ${(props) => props.attributes
    && css`
      font-size: 10px;
      color: #627179;
      font-family: 'Montserrat-Medium';
    `}

  ${(props) => props.value
    && css`
      font-size: 12px;
      color: #627179;
      font-family: 'Montserrat-SemiBold';
      text-align: right;
    `}

  ${(props) => props.color
    && css`
      color: #56af29;
    `}

  ${(props) => props.danger
    && css`
      color: #e85d1f;
    `}
`;

export const InfoContainer = styled.View`
  margin-top: 22px;
  padding-top: 12px;
  flex: 1;
  border-top-width: 1px;
  border-top-color: #dae0e3;
  justify-content: space-around;
`;

export const View = styled.View`
  width: 100%;
  height: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
