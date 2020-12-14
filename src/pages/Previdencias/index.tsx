import React, {useState, useCallback, useEffect} from 'react';
import AppBar from '../../components/AppBar';

import {
  Container,
  List,
  Card,
  Header,
  Info,
  Title,
  Subtitle,
  Row,
  Key,
  Value,
  ValueText,
  Filters,
  FilterGap,
  Filter,
  FilterContent,
} from './styles';

import ArrowDown from '../../assets/svgs/arrow-down.svg';
import {usePrevidencias} from '../../hooks/previdencias';
import Loading from '../../components/Loading';

const Previdencias: React.FC = () => {
  const [filter, setFilter] = useState(1);
  const {loading, pensions, getPensions} = usePrevidencias();

  useEffect(() => {
    getPensions();
  }, [getPensions]);

  const handleFilterChange = useCallback((filterNumber) => {
    setFilter(filterNumber);
  }, []);

  return (
    <Container>
      <AppBar title="Previdências" hasBack />
      {loading ? (
        <Loading />
      ) : (
        <List
          ListHeaderComponent={() => (
            <Filters>
              <Filter
                onPress={() => handleFilterChange(1)}
                active={filter === 1}>
                <FilterContent active={filter === 1}>SEM TAXA</FilterContent>
              </Filter>
              <FilterGap />
              <Filter
                onPress={() => handleFilterChange(2)}
                active={filter === 2}>
                <FilterContent active={filter === 2}>R$ 100,00</FilterContent>
              </Filter>
              <FilterGap />
              <Filter
                onPress={() => handleFilterChange(3)}
                active={filter === 3}>
                <FilterContent active={filter === 3}>D+1</FilterContent>
              </Filter>
            </Filters>
          )}
          data={pensions}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}: any) => (
            <Card>
              <Header>
                <Info>
                  <Title>{item.name}</Title>
                  <Subtitle>{item.type}</Subtitle>
                </Info>
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
                <Key>Taxa:</Key>
                <Value>
                  <ValueText>{`${item.tax}%`}</ValueText>
                </Value>
              </Row>
              <Row>
                <Key>Resgate:</Key>
                <Value>
                  <ValueText>{`D+ ${item.redemptionTerm}`}</ValueText>
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

export default Previdencias;
