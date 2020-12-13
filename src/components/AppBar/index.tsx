import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Container, Back, Title} from './styles';

import ArrowBack from '../../assets/svgs/back.svg';

interface Props {
  title: string;
  hasBack?: boolean;
}

const AppBar: React.FC<Props> = ({title, hasBack = false}) => {
  const {canGoBack, goBack} = useNavigation();

  return (
    <Container>
      {hasBack ? (
        <Back onPress={() => (canGoBack() ? goBack() : null)}>
          <ArrowBack />
        </Back>
      ) : null}
      <Title>{title}</Title>
    </Container>
  );
};

export default AppBar;
