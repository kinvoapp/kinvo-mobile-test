import { ThemeProvider } from 'styled-components/native'
import styled from 'styled-components/native';


export const Main = styled(ThemeProvider)`
  background-color: ${({theme}) => theme.colors.background};
  font-family:  ${({theme}) => theme.font};
`;