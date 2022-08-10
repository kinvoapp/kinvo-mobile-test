import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 120px;
  width: 320px;
  background-color:${({theme}) => theme.colors.primary};
  margin:20px auto 0 auto;
  border-radius: 10px;
  padding:20px;
  align-items: center;
  flex-direction: row ;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({theme}) => theme.colors.secundary};
`;
export const Description = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.colors.font};
  font-weight: 600;
`;
export const Icon = styled.View`
  height:56px;
  width:56px;
  justify-content:center;
  align-items:center;
  background-color: ${({theme}) => theme.colors.background};
  
  border-radius: 100px;
`;
export const Infos = styled.View`
margin-left: 20px;
`;