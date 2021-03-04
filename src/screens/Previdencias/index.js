import React, { useCallback, useEffect, useState } from 'react';

// Styles
import { Container, FiltrosContainer, FlatList } from './styles';

// Api
import api from '~/services/api';

// Components
import CardPrevidencias from '~/components/CardPrevidencias';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import Error from '~/components/Error';
import NoResults from '~/components/NoResults';

const Previdencias = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [taxFilter, setTaxFilter] = useState(false);
  const [minFilter, setMinFilter] = useState(false);
  const [redemptFilter, setRedemptFilter] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      const response = await api.get('pension');

      let tempData = response.data.data;
      if (taxFilter) {
        tempData = tempData.filter((item) => item.tax === 0);
      }
      if (minFilter) {
        tempData = tempData.filter((item) => item.minimumValue <= 100);
      }
      if (redemptFilter) {
        tempData = tempData.filter((item) => item.redemptionTerm === 1);
      }

      setItems(tempData.sort((a, b) => a.name.localeCompare(b.name)));
      setLoading(false);
      setHasError(false);
    } catch (err) {
      setHasError(true);
    }
  }, [minFilter, redemptFilter, taxFilter]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const renderItem = useCallback(
    ({ item }) => <CardPrevidencias data={item} />,
    [],
  );

  return (
    <Container>
      <FiltrosContainer>
        <Button
          label="SEM TAXA"
          onPress={() => setTaxFilter(!taxFilter)}
          active={taxFilter}
        />
        <Button
          label="R$ 100,00"
          margin
          onPress={() => setMinFilter(!minFilter)}
          active={minFilter}
        />
        <Button
          label="D+1"
          onPress={() => setRedemptFilter(!redemptFilter)}
          active={redemptFilter}
        />
      </FiltrosContainer>
      {!hasError && !loading && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={items}
          renderItem={renderItem}
        />
      )}
      {loading && <Loading />}

      {hasError && <Error screen="previdencias" onPress={getPosts} />}

      {!hasError && items.length === 0 && !loading && <NoResults />}
    </Container>
  );
};

export default Previdencias;
