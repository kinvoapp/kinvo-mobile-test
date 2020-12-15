import React from 'react';

import { Wrapper, Title, Description, Button, Text } from './styles';

type Props = {
  handleIsConnected: () => void;
}

const MessageTryAgain: React.FC<Props> = ({handleIsConnected}) => {
  return (
    <Wrapper>
      <Title>Ocorreu um erro.</Title>
      <Description>
        Não foi possível se conectar ao banco{'\n'}de fundos.
      </Description>

      <Button onPress={() => handleIsConnected()}>
        <Text>TENTE NOVAMENTE</Text>
        </Button>
    </Wrapper>
  );
};

export default MessageTryAgain;
