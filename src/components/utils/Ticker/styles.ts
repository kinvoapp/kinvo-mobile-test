import styled from 'styled-components/native';

export const Container = styled.Text`
  font-size: ${({theme})=>theme.fontSizes.medium};
  color: ${({theme})=>theme.colors.font};
  font-family: 'Montserrat_600SemiBold';
  text-transform: uppercase;
`