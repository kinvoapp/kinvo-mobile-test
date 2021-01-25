import styled from 'styled-components/native';

interface ITextProps {
  fontSize: number;
  disabled: boolean;
  flexWrap: string;
}

export const Text = styled.Text<ITextProps>`
  max-width: 200px;
  font-size: ${(props => props.fontSize ? props.fontSize : 16)}px;
  opacity: ${(props => props.disabled ? .5 : 1)};
  flex-wrap: ${(props => props.flexWrap ? props.flexWrap : 'nowrap')};
  font-family: 'Montserrat-Bold';
  color: #627179;
`;
