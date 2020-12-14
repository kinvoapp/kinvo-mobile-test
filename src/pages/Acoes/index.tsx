import React, {useEffect} from 'react';
import AppBar from '../../components/AppBar';
import {useAcoes} from '../../hooks/acoes';

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
import Loading from '../../components/Loading';

const Acoes: React.FC = () => {
  const {loading, stocks, getStocks} = useAcoes();

  useEffect(() => {
    getStocks();
  }, [getStocks]);

  return (
    <Container>
      <AppBar title="Ações" hasBack />
      {loading ? (
        <Loading />
      ) : (
        <List
          data={stocks}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}: any) => (
            <Card>
              <Header>
                <Info>
                  <Title>{item.name}</Title>
                  <Subtitle>{item.ticker}</Subtitle>
                </Info>
                <Like>
                  <LikeIcon />
                </Like>
              </Header>
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

export default Acoes;
