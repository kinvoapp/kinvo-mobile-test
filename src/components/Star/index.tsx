import React from 'react';

import { Text } from 'react-native';

import { Wrapper, IconStar} from './styles';

const Star: React.FC = () => {
  return (
    <Wrapper>
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
    </Wrapper>
  );
};

export default Star;
