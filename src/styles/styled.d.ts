import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      grayBackground: string;
      grayText: string;
      grayBorder: string;
      blueNew: string;
      yellowStar: string;
      orangeProfit: string;
    };
    fonts: {
      medium: string;
      semiBold: string;
      bold: string;
    };
  }
}
