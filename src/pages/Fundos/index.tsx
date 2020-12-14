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
  Badge,
  BadgeContent,
  Row,
  Key,
  Value,
  ValueText,
} from './styles';

import ArrowDown from '../../assets/svgs/arrow-down.svg';
import StarIcon from '../../assets/svgs/star.svg';
import FillStarIcon from '../../assets/svgs/star-fill.svg';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Fundos: React.FC = () => {
  return (
    <Container>
      <AppBar title="Fundos" hasBack />
      <List
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => (
          <Card>
            <Header>
              <Info>
                <Title>Alaska Black</Title>
                <Subtitle>MULTIMERCADOS</Subtitle>
              </Info>
              <Badge>
                <BadgeContent>Novo</BadgeContent>
              </Badge>
            </Header>
            <Row>
              <Key>Classificação:</Key>
              <Value>
                {Array.from({length: 3}, (_, i) => 0 + i).map((e) => (
                  <FillStarIcon key={e} />
                ))}
                {Array.from({length: 5 - 3}, (_, i) => 0 + i).map((e) => (
                  <StarIcon key={e} />
                ))}
              </Value>
            </Row>
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

export default Fundos;
