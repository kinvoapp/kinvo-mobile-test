import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList`
  flex: 1;
  padding: 20px;
`;

export const Filters = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.grayBorder};
  margin-bottom: 20px;
`;

interface FilterProps {
  active?: boolean;
}

export const Filter = styled.TouchableOpacity<FilterProps>`
  background-color: ${({theme, active = false}) =>
    active ? theme.colors.primary : theme.colors.white};
  border-radius: 100px;
  padding: 8px 16px;
  align-items: center;
  flex: 1;
`;

export const FilterGap = styled.View`
  width: 20px;
`;

export const FilterContent = styled.Text<FilterProps>`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 12px;
  color: ${({theme, active = false}) =>
    active ? theme.colors.white : theme.colors.grayText};
`;

export const Card = styled.View`
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.grayBorder};
  padding: 20px 20px 5px 20px;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.colors.white};
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
