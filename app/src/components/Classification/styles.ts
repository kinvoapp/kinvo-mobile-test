import styled, { css } from 'styled-components/native';

interface IClassificationProps {
  disabled: boolean;
}

export const View = styled.View<IClassificationProps>`
  width: 100%;
  margin-top: 13px;
  padding-bottom: 13px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  opacity: ${(props => props.disabled ? .5 : 1)};
`;

export const ClassificationIcon = styled.Image<IClassificationProps>`
  width: 20px;
  height: 20px;
  margin-left: 7px;
  ${props => props.disabled && css`
    tintColor: #627179;
  `}
`;

export const ClassificationText = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: #627179;
`;

export const StarContainer = styled.View`
  flex-direction: row;
`;
