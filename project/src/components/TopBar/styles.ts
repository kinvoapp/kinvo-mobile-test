import styled, { css } from 'styled-components/native';

interface hasActive {
  hasActive?: boolean;
}

export const Container = styled.View`
  background-color: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TextTopBar = styled.Text<hasActive>`
  color: #788083;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-weight: bold;

  ${props =>
    props.hasActive &&
    css`
      background-color: rgb(204, 204, 204);
      margin-top: 10px;
      padding: 12px;
    `}
`;
