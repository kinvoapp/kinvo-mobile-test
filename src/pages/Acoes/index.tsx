import React from 'react';
import AppBar from '../../components/AppBar';

import {
  Container,
  List,
  Card,
  Header,
  Info,
  Title,
  Subtitle,
  Like,
  Row,
  Key,
  Value,
  ValueText,
} from './styles';

import ArrowDown from '../../assets/svgs/arrow-down.svg';
import FillLikeIcon from '../../assets/svgs/like-fill.svg';
import LikeIcon from '../../assets/svgs/like.svg';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Acoes: React.FC = () => {
  return (
    <Container>
      <AppBar title="Ações" hasBack />
      <List
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => (
          <Card>
            <Header>
              <Info>
                <Title>Magazine Luiza</Title>
                <Subtitle>MGLU3</Subtitle>
              </Info>
              <Like>
                <LikeIcon />
              </Like>
            </Header>
            <Row>
              <Key>Valor mínimo:</Key>
              <Value>
                <ValueText>R$ 24,17</ValueText>
              </Value>
            </Row>
            <Row>
              <Key>Rentabilidade:</Key>
              <Value>
                <ArrowDown />
                <ValueText orange>-27%</ValueText>
              </Value>
            </Row>
          </Card>
        )}
      />
    </Container>
  );
};

export default Acoes;
