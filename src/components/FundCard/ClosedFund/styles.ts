import styled from 'styled-components/native';

export const Container = styled.View`
  width: 320px;
  height: 185px;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px auto 0 auto;
  padding: 18px;
  
  background-color: #F7F8F8 !important;
  border: 1px solid ${({theme})=>theme.colors.border};
  border-radius: 10px;

  opacity: .5;
`;

export const Data = styled.View`
  width: 100%;
  padding-top: 10px;
  flex-direction: row; 
  justify-content:space-between;
  `
export const DataAside = styled.View`
  flex-direction: column; 

  `
export const ClosedText = styled.Text`
  flex-direction: column; 
  color: #627179;
  text-align: right;
`

export const Info = styled.View`
width: 100%;  
flex-direction: row; 
justify-content: space-between;
padding-bottom: 15px;
border-bottom-width: 1px;
border-color: ${({theme})=>theme.colors.border};
`
export const Name = styled.Text`
  font-size: ${({theme})=>theme.fontSizes.large};
  color: #627179;
  font-family: 'Montserrat_700Bold';
  `

export const InfoAside = styled.View`
  max-width: 190px;
  `
