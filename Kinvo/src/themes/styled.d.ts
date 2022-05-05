import "styled-components";
import light from "./light";

declare module "styled-components" {
  type ThemeLight = typeof light;
  export interface DefaultTheme extends ThemeLight { }
}