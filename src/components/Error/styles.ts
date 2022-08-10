import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 228px;
  text-align: center;

    margin: 0 auto;
  `;
export const Retry = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secundary};
  width: 179px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  `;
export const Title = styled.Text`
  color: ${({theme}) => theme.colors.font};
  font-size: ${({theme}) => theme.fontSizes.large};
  font-weight: bold;
  `;
export const Describe = styled.Text`
  color: ${({theme}) => theme.colors.font};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-weight: 600;

`;
