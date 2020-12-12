import React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#6F4DBF',
    white: '#FFFFFF',
    grayBackground: '#ECF0F2',
    grayText: '#627179',
    grayBorder: '#DAE0E3',
    blueNew: '#40C5D6',
    orangeProfit: '#E85D1F',
    yellowStar: '#F8C22E',
  },
  fonts: {
    bold: 'Montserrat-Bold',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
  },
};

interface Props {
  children: React.ReactElement;
}

const Theme: React.FC<Props> = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
