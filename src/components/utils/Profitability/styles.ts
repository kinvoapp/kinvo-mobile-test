import styled from 'styled-components/native';

export const Up = styled.Text`
  color: #AED335;
  color: ${props => props.closed ? ({theme})=>theme.colors.closed : '#AED335'};

`;

export const Down = styled.Text`
  color: #E85D1F;
`;

