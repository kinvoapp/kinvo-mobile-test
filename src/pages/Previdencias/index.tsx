import React, {useState, useCallback} from 'react';
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

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Previdencias: React.FC = () => {
  const [filter, setFilter] = useState(1);

  const handleFilterChange = useCallback((filterNumber) => {
    setFilter(filterNumber);
  }, []);

  return (
    <Container>
      <AppBar title="Previdências" hasBack />
      <List
        ListHeaderComponent={() => (
          <Filters>
            <Filter onPress={() => handleFilterChange(1)} active={filter === 1}>
              <FilterContent active={filter === 1}>SEM TAXA</FilterContent>
            </Filter>
            <FilterGap />
            <Filter onPress={() => handleFilterChange(2)} active={filter === 2}>
              <FilterContent active={filter === 2}>R$ 100,00</FilterContent>
            </Filter>
            <FilterGap />
            <Filter onPress={() => handleFilterChange(3)} active={filter === 3}>
              <FilterContent active={filter === 3}>D+1</FilterContent>
            </Filter>
          </Filters>
        )}
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => (
          <Card>
            <Header>
              <Info>
                <Title>Alaska Prev</Title>
                <Subtitle>MULTIMERCADOS</Subtitle>
              </Info>
            </Header>
            <Row>
              <Key>Valor mínimo:</Key>
              <Value>
                <ValueText>R$ 1.000,00</ValueText>
              </Value>
            </Row>
            <Row>
              <Key>Taxa:</Key>
              <Value>
                <ValueText>2,00%</ValueText>
              </Value>
            </Row>
            <Row>
              <Key>Resgate:</Key>
              <Value>
                <ValueText>D+ 10</ValueText>
              </Value>
            </Row>
            <Row>
              <Key>Rentabilidade:</Key>
              <Value>
                <ArrowDown />
                <ValueText orange>-27,50%</ValueText>
              </Value>
            </Row>
          </Card>
        )}
      />
    </Container>
  );
};

export default Previdencias;
