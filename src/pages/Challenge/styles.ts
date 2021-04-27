import styled, {css} from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ItemProps {
    new?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 30px;
  background: #ffffff;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color:#6F4DBF;
  font-size:24px;
  font-family: 'Montserrat-Bold';
  line-height: 28px;
`;

export const Menu = styled.View`
    padding: 32px 24px 16px;

`;
export const MenuContainer = styled(RectButton)`
    background: #ffffff;    
    border-radius: 10px;
    padding: 40px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
`;

export const MenuIcon = styled.Image`
    width: 28px;
    height: 28px;
    border-radius: 5px;
`;

export const MenuMeta = styled.View`
    flex: 1;
    margin-left: 20px;
    align-items:flex-start;
`;

export const MenuInfo = styled.Text`
    color:#6F4DBF;
    font-size:19px;
    font-family: 'Montserrat-Bold';
`;

export const MenuSubInfo = styled.Text`
    color:#627179;
    font-size:12px;
    font-family: 'Montserrat-Bold';
`;

export const Badge = styled.Text<ItemProps>`
    ${(props :ItemProps) =>
        props.new &&
        css`
            color:#6F4DBF;
            font-size:10px;
            font-family: 'Montserrat-Bold';
            border-radius: 10px;           
            background: #40C5D6;  
            color: #ffffff;   
            padding: 3px 10px;
        `}    
`;
// export const MenuList = styled(FlatList as new () => FlatList<MENU>)`

// `;