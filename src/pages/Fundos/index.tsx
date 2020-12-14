import React, {useEffect} from 'react';
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
import {useFundos} from '../../hooks/fundos';
import Loading from '../../components/Loading';

const Fundos: React.FC = () => {
  const {loading, funds, getFunds} = useFundos();

  useEffect(() => {
    getFunds();
  }, [getFunds]);

  return (
    <Container>
      <AppBar title="Fundos" hasBack />
      {loading ? (
        <Loading />
      ) : (
        <List
          data={funds}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}: any) => (
            <Card>
              <Header>
                <Info>
                  <Title>{item.name}</Title>
                  <Subtitle>{item.type}</Subtitle>
                </Info>
                {item.status !== 0 ? (
                  <Badge>
                    <BadgeContent>
                      {item.status === 1 ? 'Novo' : 'Fechado'}
                    </BadgeContent>
                  </Badge>
                ) : null}
              </Header>
              <Row>
                <Key>Classificação:</Key>
                <Value>
                  {Array.from({length: item.rating}, (_, i) => 0 + i).map(
                    (e) => (
                      <FillStarIcon key={e} />
                    ),
                  )}
                  {Array.from({length: 5 - item.rating}, (_, i) => 0 + i).map(
                    (e) => (
                      <StarIcon key={e} />
                    ),
                  )}
                </Value>
              </Row>
              <Row>
                <Key>Valor mínimo:</Key>
                <Value>
                  <ValueText>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.minimumValue)}
                  </ValueText>
                </Value>
              </Row>
              <Row>
                <Key>Rentabilidade:</Key>
                <Value>
                  <ArrowDown />
                  <ValueText orange>{`${item.profitability}%`}</ValueText>
                </Value>
              </Row>
            </Card>
          )}
        />
      )}
    </Container>
  );
};

export default Fundos;
