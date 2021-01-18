import React from "react";
import Colors from "../../utils/colors";
import Typography from "../Typography";

import { Container } from "./styles";

type Props = {
  title?: string;
  color?: Colors;
};

function Badget({ title, color }: Props) {
  return (
    <Container backgroundColor={color}>
      <Typography
        textTransform="uppercase"
        type="body"
        color={Colors.LIGHT}
        align="center"
      >
        {title}
      </Typography>
    </Container>
  );
}

export default Badget;
