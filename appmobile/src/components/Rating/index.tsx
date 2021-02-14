import React from 'react';

import lightstar from '../../assets/lightstar.png';

import { Container, Image } from './styles';

const Rating: React.FC = () => {
  return (
    <Container>
      <Image source={lightstar} />;
    </Container>
  );
};

export default Rating;
