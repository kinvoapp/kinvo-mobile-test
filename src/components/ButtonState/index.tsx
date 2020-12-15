import React from 'react';

import { Wrapper, Text } from './styles';

type Props = {
  buttonPrimary?: boolean;
}

const ButtonState: React.FC<Props> = ({buttonPrimary}) => {
  return (
    <Wrapper typeButton={buttonPrimary}>
      <Text>{buttonPrimary ? 'Novo' : 'Fechado'}</Text>
    </Wrapper>
  );
};

export default ButtonState;
