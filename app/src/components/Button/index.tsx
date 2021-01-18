import React from "react";
import Colors from "../../utils/colors";
import Typography from "../Typography";

import { Container } from "./styles";
type Props = React.ComponentProps<typeof Container>;

function Button({ children, ...props }: Props) {
  return (
    <Container {...props}>
      <Typography
        type="body"
        textTransform="uppercase"
        color={Colors.LIGHT}
        align="center"
      >
        {children}
      </Typography>
    </Container>
  );
}

export default Button;
