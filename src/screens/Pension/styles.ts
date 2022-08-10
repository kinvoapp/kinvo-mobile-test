import styled from 'styled-components/native';

export const FilterButton = styled.TouchableOpacity`
  width: 93px;
  height: 32px;
  background-color:${({theme}) => theme.colors.primary};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  `;

export const TextButton = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.medium};  
  font-family: 'Montserrat_600SemiBold';
  `

export const FilterBox = styled.View` 
  width: 320px;
  margin: 0 auto;
  padding: 20px 0;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.colors.font};

  border-bottom-width: 1px;
  border-color: ${({theme})=>theme.colors.border};
`;
