import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${({theme}) => theme.colors.white};
  padding: 32px 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.grayBorder};
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Leading = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${({theme}) => theme.colors.grayBackground};
  margin-right: 12px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 10px;
  color: ${({theme}) => theme.colors.grayText};
`;

export const Badge = styled.View`
  background-color: ${({theme}) => theme.colors.blueNew};
  padding: 4px 15px;
  border-radius: 10px;
`;

export const BadgeContent = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 10px;
  color: ${({theme}) => theme.colors.white};
`;
