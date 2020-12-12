import React from 'react';
import { Image } from 'react-native';

import { Container, Title, SubTitle, Column, Content } from './styles';

import Actions from '../../assets/svgs/actions.svg';

import NewTag from '../../assets/svgs/new.svg';

interface ICardHome {
  title: string;
  subtitle: string;
  onPress(): void;
  Icon: keyof JSX.In;
  IconNew: keyof JSX.Element;
}

const CardHome: React.FC<ICardHome> = ({ onPress, title, subtitle, Icon }) => {
  return (
    <Container onPress={onPress}>
      <Icon />

      <Column>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Column>

      <Content>
        <NewTag />
      </Content>
    </Container>
  );
};

export default CardHome;
