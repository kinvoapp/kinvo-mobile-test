import styled from 'styled-components/native';

export const FilterButton = styled.TouchableOpacity`
  width: 93px;
  height: 32px;
  background-color:${({theme}) => theme.colors.primary};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.font};
  `;

export const TextButton = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.medium};  
  font-weight: 600;
`

export const FilterList = styled.FlatList` 
  width: 320px;
  margin: 0 auto;
`;
