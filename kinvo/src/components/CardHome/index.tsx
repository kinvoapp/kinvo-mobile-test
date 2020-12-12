import React, { useState } from 'react';
import { Image } from 'react-native';

import { Container, Title, SubTitle, Column, Content } from './styles';

import Actions from '../../assets/svgs/actions.svg';

import NewTag from '../../assets/svgs/new.svg';

interface ICardHome {
  title: string;
  subtitle: string;
  onPress(): void;
  Icon: keyof JSX.IntrinsicElements;
  tag: boolean;
}

const CardHome: React.FC<ICardHome> = ({
  onPress,
  title,
  subtitle,
  Icon,
  tag,
}) => {
  return (
    <Container onPress={onPress}>
      <Icon />

      <Column>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Column>

      <Content>{tag && <NewTag />}</Content>
    </Container>
  );
};

export default CardHome;
