// export { Container as default } from "./styles";
import React from "react";
import Icon from "../Icon";

import { TouchableContainer } from "./styles";

type Props = React.ComponentProps<typeof TouchableContainer>;

function BackButton(props: Props) {
  return (
    <TouchableContainer {...props}>
      <Icon name="arrow-left" />
    </TouchableContainer>
  );
}

export default BackButton;
