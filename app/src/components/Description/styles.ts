import styled from 'styled-components/native';

interface IDescriptionProps {
  disabled: boolean;
}

export const Text = styled.Text<IDescriptionProps>`
  font-size: 12px;
  opacity: ${(props => props.disabled ? .5 : 1)};
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;
