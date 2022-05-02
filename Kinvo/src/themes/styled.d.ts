import "styled-components";
import colors from "./colors";

declare module "styled-components" {
  type ThemeColor = typeof colors;
  export interface DefaultTheme extends ThemeColor { }
}