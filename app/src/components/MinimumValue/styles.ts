import styled from 'styled-components/native';

interface IMinimunValueProps {
  disabled: boolean;
}

export const View = styled.View<IMinimunValueProps>`
  width: 100%;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  opacity: ${(props => props.disabled ? .5 : 1)};
`;

export const MinimumValueText = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: #627179;
`;

export const MinimumValuePrice = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;
