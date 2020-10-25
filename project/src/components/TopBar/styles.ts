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
  color: #677075;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 16px;
  font-family: 'SFProDisplay-Semibold';

  ${props =>
    props.hasActive &&
    css`
      background-color: #f4f8fb;
      margin-top: 10px;
      padding: 12px;
    `}
`;
