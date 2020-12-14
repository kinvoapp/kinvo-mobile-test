import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList`
  flex: 1;
  padding: 20px;
`;

interface CardProps {
  closed?: boolean;
}

export const Card = styled.View<CardProps>`
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.grayBorder};
  padding: 20px 20px 5px 20px;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.colors.white};
  ${({closed = false}) =>
    closed
      ? css`
          opacity: 0.5;
        `
      : null}
`;

export const Header = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.grayBorder};
  margin-bottom: 10px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  color: ${({theme}) => theme.colors.grayText};
  margin-bottom: 3px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 12px;
  color: ${({theme}) => theme.colors.grayText};
  margin-bottom: 15px;
`;

export const Badge = styled.View`
  padding: 4px 16px;
  background-color: ${({theme}) => theme.colors.blueNew};
  border-radius: 10px;
  align-self: flex-start;
`;

export const BadgeContent = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 10px;
  color: ${({theme}) => theme.colors.white};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Key = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 10px;
  color: ${({theme}) => theme.colors.grayText};
`;

export const Value = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface ValueTextProps {
  orange?: boolean;
}

export const ValueText = styled.Text<ValueTextProps>`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 12px;
  color: ${({theme, orange = false}) =>
    orange ? theme.colors.orangeProfit : theme.colors.grayText};
`;
