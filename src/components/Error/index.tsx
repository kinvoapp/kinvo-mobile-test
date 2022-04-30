import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Heading2 } from '~/styles/typography';
import { Button, ButtonLabel, Container, InfoText } from './styles';

interface ErrorProps extends TouchableOpacityProps {
  infoText: string;
}

const Error = ({ infoText, ...rest }: ErrorProps) => {
  return (
    <Container>
      <Heading2>Ocorreu um erro</Heading2>

      <InfoText>{infoText}</InfoText>

      <Button
        activeOpacity={0.5}
        hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
        {...rest}
      >
        <ButtonLabel>TENTAR NOVAMENTE</ButtonLabel>
      </Button>
    </Container>
  );
};

export default Error;
