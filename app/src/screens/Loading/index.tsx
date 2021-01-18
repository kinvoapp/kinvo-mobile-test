import React from "react";
import { ActivityIndicator } from "react-native";
import Colors from "../../utils/colors";

import { Container } from "./styles";

function Loading() {
  return (
    <Container>
      <ActivityIndicator size="large" color={Colors.PRIMARY} />
    </Container>
  );
}

export default Loading;
