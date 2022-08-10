import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 70px 0;
  margin: 0 20px;
 
  `;

export const Warn = styled.Text`
  text-align: center;
  max-width:210px;
  margin: 0 auto;
  
  border-color: ${({theme})=>theme.colors.font};
  font-size: ${({theme})=>theme.fontSizes.medium};
`;