import styled, {css} from 'styled-components/native';
import { FlatList } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

interface ItemProps {
    status?: number;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 30px;
  background: ${colors.white};

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color:#6F4DBF;
  font-size:24px;
  font-family: ${fonts.heading};
  line-height: 28px;
  padding-left: 10px;
`;

export const FilterView = styled.View`
    height: 40px;
    margin: 20px 20px 0px 18px;
    justify-content: space-between;
`;

export const FilterFlatList = styled(FlatList as new () => FlatList<MENU>)`
    height: 40px;
    margin-bottom: 5px;
    margin-left: 0px;
`;

export const List = styled.View`
    padding: 22px 24px 16px;
    margin-bottom: 160px;
`;
export const CardContainer = styled.View<ItemProps>`
    background: ${colors.white};    
    border-radius: 10px;
    padding: 18px 18px 5px 18px;
    margin-bottom: 16px;
    flex-direction: column;
    ${(props :ItemProps) =>
        props.status === 2 &&
        css`
            opacity: 0.5;
        `}     
`;

export const CardHeader = styled.View`
   flex-direction: row;
   justify-content: space-between;
`

export const CardTitle = styled.Text`
    color:#627179;
    font-size:14px;
    max-width:250px;
    font-family: ${fonts.heading};
    padding-top:2px;
`;

export const CardSubTitle = styled.Text`
    color:#627179;
    font-size:12px;
    font-family: ${fonts.heading};
`;

export const Badge = styled.Text<ItemProps>`
    height: 20px;
    display: none;
    ${(props :ItemProps) =>
        props.status === 0 &&
        css`
            display: flex;
            color:#6F4DBF;
            font-size:10px;
            font-family: ${fonts.heading};
            border-radius: 10px;           
            background: #40C5D6;  
            color: #ffffff;   
            padding: 3px 10px;
        `}   
    ${(props :ItemProps) =>
        props.status === 2 &&
        css`
            display: flex;
            color:#6F4DBF;
            font-size:10px;
            font-family: ${fonts.heading};
            border-radius: 10px;           
            background: #818181;  
            color: #ffffff;   
            padding: 3px 10px;
        `}          
`;

export const Line = styled.View`
    height: 1px;
    width: 100%; 
    margin: 20px 0px 5px 0px;
    background: #DAE0E3; 
`

export const ViewLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 7px 0px;
`

export const ViewLineText = styled.Text`
    color:#627179;
    font-size:12px;
    font-family: ${fonts.heading};
`;

