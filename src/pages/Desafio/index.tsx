import React from 'react';
import {useNavigation} from '@react-navigation/native';

import AppBar from '../../components/AppBar';

import {
  Container,
  Content,
  Card,
  Leading,
  Body,
  Title,
  Subtitle,
  Badge,
  BadgeContent,
} from './styles';

import Acoes from '../../assets/svgs/acoes.svg';
import Fundos from '../../assets/svgs/fundos.svg';
import Previdencias from '../../assets/svgs/previdencias.svg';

const Desafio: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <AppBar title="Desafio" />
      <Content>
        <Card onPress={() => navigate('Acoes')}>
          <Leading>
            <Acoes />
          </Leading>
          <Body>
            <Title>Ações</Title>
            <Subtitle>Nacionais</Subtitle>
          </Body>
        </Card>
        <Card onPress={() => navigate('Fundos')}>
          <Leading>
            <Fundos />
          </Leading>
          <Body>
            <Title>Fundos</Title>
            <Subtitle>De investimentos</Subtitle>
          </Body>
          <Badge>
            <BadgeContent>Novo</BadgeContent>
          </Badge>
        </Card>
        <Card onPress={() => navigate('Previdencias')}>
          <Leading>
            <Previdencias />
          </Leading>
          <Body>
            <Title>Previdências</Title>
            <Subtitle>Privadas</Subtitle>
          </Body>
        </Card>
      </Content>
    </Container>
  );
};

export default Desafio;
