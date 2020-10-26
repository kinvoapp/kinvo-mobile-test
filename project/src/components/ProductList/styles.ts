import styled, { css } from 'styled-components/native';

interface productTypeIdProps {
  productTypeId: number;
}

export const InstitutionName = styled.Text<productTypeIdProps>`
  font-size: 10px;
  padding-bottom: 4px;

  ${({ productTypeId }) =>
    productTypeId === 1 &&
    css`
      color: #008dcb;
    `}
  ${({ productTypeId }) =>
    productTypeId === 2 &&
    css`
      color: #d5a82c;
    `}
  ${({ productTypeId }) =>
    productTypeId === 3 &&
    css`
      color: #94e5d2;
    `}
  ${({ productTypeId }) =>
    productTypeId === 4 &&
    css`
      color: #86b2de;
    `}
  ${({ productTypeId }) =>
    productTypeId === 5 &&
    css`
      color: #5aaad5;
    `}
  ${({ productTypeId }) =>
    productTypeId === 6 &&
    css`
      color: #38bfa0;
    `}
  ${({ productTypeId }) =>
    productTypeId === 7 &&
    css`
      color: #3e71b9;
    `}
  ${({ productTypeId }) =>
    productTypeId === 8 &&
    css`
      color: #4c309b;
    `}
  ${({ productTypeId }) =>
    productTypeId === 9 &&
    css`
      color: #86b2de;
    `}
  ${({ productTypeId }) =>
    productTypeId === 10 &&
    css`
      color: #b9b42c;
    `}
  ${({ productTypeId }) =>
    productTypeId === 11 &&
    css`
      color: #4141d5;
    `}
  ${({ productTypeId }) =>
    productTypeId === 12 &&
    css`
      color: #9390e5;
    `}
`;
export const ProductName = styled.Text`
  font-size: 16px;
  color: #737479;
  line-height: 15px;
`;
export const TextBalance = styled.Text`
  font-size: 10px;
`;
export const Equity = styled.Text<productTypeIdProps>`
  font-size: 20px;
  font-family: 'SFProDisplay-Black';

  ${({ productTypeId }) =>
    productTypeId === 1 &&
    css`
      color: #008dcb;
    `}
  ${({ productTypeId }) =>
    productTypeId === 2 &&
    css`
      color: #d5a82c;
    `}
  ${({ productTypeId }) =>
    productTypeId === 3 &&
    css`
      color: #94e5d2;
    `}
  ${({ productTypeId }) =>
    productTypeId === 4 &&
    css`
      color: #86b2de;
    `}
  ${({ productTypeId }) =>
    productTypeId === 5 &&
    css`
      color: #5aaad5;
    `}
  ${({ productTypeId }) =>
    productTypeId === 6 &&
    css`
      color: #38bfa0;
    `}
  ${({ productTypeId }) =>
    productTypeId === 7 &&
    css`
      color: #3e71b9;
    `}
  ${({ productTypeId }) =>
    productTypeId === 8 &&
    css`
      color: #4c309b;
    `}
  ${({ productTypeId }) =>
    productTypeId === 9 &&
    css`
      color: #86b2de;
    `}
  ${({ productTypeId }) =>
    productTypeId === 10 &&
    css`
      color: #b9b42c;
    `}
  ${({ productTypeId }) =>
    productTypeId === 11 &&
    css`
      color: #4141d5;
    `}
  ${({ productTypeId }) =>
    productTypeId === 12 &&
    css`
      color: #9390e5;
    `}
`;

export const Container = styled.View``;

export const BarColor = styled.View<productTypeIdProps>`
  border-left-width: 5px;
  padding-left: 5px;
  justify-content: center;

  ${({ productTypeId }) =>
    productTypeId === 1 &&
    css`
      border-left-color: #008dcb;
    `}
  ${({ productTypeId }) =>
    productTypeId === 2 &&
    css`
      border-left-color: #d5a82c;
    `}
  ${({ productTypeId }) =>
    productTypeId === 3 &&
    css`
      border-left-color: #94e5d2;
    `}
  ${({ productTypeId }) =>
    productTypeId === 4 &&
    css`
      border-left-color: #86b2de;
    `}
  ${({ productTypeId }) =>
    productTypeId === 5 &&
    css`
      border-left-color: #5aaad5;
    `}
  ${({ productTypeId }) =>
    productTypeId === 6 &&
    css`
      border-left-color: #38bfa0;
    `}
  ${({ productTypeId }) =>
    productTypeId === 7 &&
    css`
      border-left-color: #3e71b9;
    `}
  ${({ productTypeId }) =>
    productTypeId === 8 &&
    css`
      border-left-color: #4c309b;
    `}
  ${({ productTypeId }) =>
    productTypeId === 9 &&
    css`
      border-left-color: #86b2de;
    `}
  ${({ productTypeId }) =>
    productTypeId === 10 &&
    css`
      border-left-color: #b9b42c;
    `}
  ${({ productTypeId }) =>
    productTypeId === 11 &&
    css`
      border-left-color: #4141d5;
    `}
  ${({ productTypeId }) =>
    productTypeId === 12 &&
    css`
      border-left-color: #9390e5;
    `}
`;

export const List = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;

  padding: 14px;
`;

export const Balance = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
