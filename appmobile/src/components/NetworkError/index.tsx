import React from 'react';

import {
  Container,
  ButtonTryAgain,
  Subtitle,
  Title,
  ButtonText,
} from './styles';

interface NetworkErrorProps {
  subtitle: string;
  onPress?: () => void;
}

const NetworkError: React.FC<NetworkErrorProps> = ({ subtitle, onPress }) => {
  return (
    <Container>
      <Title>Ocorreu um erro.</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ButtonTryAgain onPress={onPress}>
        <ButtonText>Tentar novamente</ButtonText>
      </ButtonTryAgain>
    </Container>
  );
};

export default NetworkError;
