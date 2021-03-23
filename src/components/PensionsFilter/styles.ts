import styled from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  width: 88%;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #dae0e3;
`;

interface ButtonProps {
  isActive: Boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 93px;
  border-radius: 25px;
  background-color: ${props => (props.isActive ? '#6F4DBF' : '#FFF')};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 12px;
  color: ${props => (props.isActive ? '#FFF' : '#627179')};
  font-family: 'Montserrat-SemiBold';
`;
