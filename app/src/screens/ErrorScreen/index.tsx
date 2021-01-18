import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Colors from "../../utils/colors";
import { Container, MessageContainer } from "./styles";

type Props = {
  message: string;
  action?: {
    label: string;
    onPress?: Function;
  };
};

function ErrorScreen({ message, action }: Props) {
  return (
    <Container>
      <View style={{}}>
        <Typography type="title" align="center" color={Colors.DARK}>
          Ocorreu um erro.
        </Typography>
        <MessageContainer>
          <Typography fontSize={12} align="center" type="body">
            {message}
          </Typography>
        </MessageContainer>
        {action && <Button onPress={action.onPress}>{action.label}</Button>}
      </View>
    </Container>
  );
}

export default ErrorScreen;
