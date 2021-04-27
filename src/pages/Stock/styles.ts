import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface NewMenuItemProps {
    new?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 30px;
  background: #ffffff;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color:#6F4DBF;
  font-size:24px;
  font-family: 'Montserrat-Bold';
  line-height: 28px;
  padding-left: 10px;    
`;

export const List = styled.View`
    padding: 32px 24px 16px;
    margin-bottom: 80px;
`;
export const CardContainer = styled(RectButton)`
    background: #ffffff;    
    border-radius: 10px;
    padding: 18px 18px 5px 18px;
    margin-bottom: 16px;
    flex-direction: column;
`;

export const CardHeader = styled.View`
   flex-direction: row;
   justify-content: space-between;
`

export const CardTitle = styled.Text`
    color:#627179;
    font-size:19px;
    font-family: 'Montserrat-Bold';
`;

export const CardSubTitle = styled.Text`
    color:#627179;
    font-size:12px;
    font-family: 'Montserrat-Bold';
`;

export const HeartkIcon = styled.Image`
    width: 20px;
    height: 20px;
    border-radius: 5px;
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
    padding: 8px 0px; 
`

export const ViewLineText = styled.Text`
    color:#627179;
    font-size:12px;
    font-family: 'Montserrat-Bold';
`;
