/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Like from '../../assets/svgs/like.svg';
import LikeOutline from '../../assets/svgs/like-outline.svg';

import { Container, Header, Title, Ticker } from './styles';

const CardActions: React.FC = () => {
  const [like, setLike] = useState<boolean>(false);

  const handleLike = () => {
    if (like === false) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <Container>
      <Header>
        <View>
          <Title>Maganize Luiza</Title>
          <Ticker>MGLU3</Ticker>
        </View>

        <TouchableOpacity onPress={handleLike}>
          {like ? (
            <Like height="30" width="30" />
          ) : (
            <LikeOutline height="30" width="30" />
          )}
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default CardActions;
