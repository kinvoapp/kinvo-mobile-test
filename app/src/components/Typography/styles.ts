import styled from "styled-components/native";
import { TextStyle } from "react-native";
import { Props } from ".";
import Colors from "../../utils/colors";

type DefaultStyle = Required<Pick<TextStyle, "color" | "fontSize">> &
  Pick<TextStyle, "textTransform"> & {
    fontFamily:
      | "Montserrat_700Bold"
      | "Montserrat_600SemiBold"
      | "Montserrat_500Medium";
  };

const styles: Record<Props["type"], DefaultStyle> = {
  title: {
    fontFamily: "Montserrat_700Bold",
    color: Colors.PRIMARY,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.DARK,
    fontSize: 10,
  },
  ticker: {
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.DARK,
    fontSize: 12,
    textTransform: "uppercase",
  },
  body: {
    fontFamily: "Montserrat_500Medium",
    color: Colors.DARK,
    fontSize: 10,
  },
  strong: {
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.DARK,
    fontSize: 12,
  },
};

export const StyledText = styled.Text<Props>`
  font-family: ${(p) => styles[p.type].fontFamily};
  font-size: ${(p) => styles[p.type].fontSize}px;
  color: ${(p) => p.color ?? (styles[p.type].color as string)};
  text-align: ${(p) => p.align ?? "auto"};
  text-transform: ${(p) => styles[p.type].textTransform ?? "none"};
`;
