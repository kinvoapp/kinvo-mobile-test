import React from "react";
import Colors from "../../utils/colors";
import Typography from "../Typography";

import { Container } from "./styles";

function Badget() {
  return (
    <Container>
      <Typography type="body" color={Colors.LIGHT} align="center">
        NOVO
      </Typography>
    </Container>
  );
}

export default Badget;
