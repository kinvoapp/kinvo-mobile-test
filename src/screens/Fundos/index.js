import React, { useCallback, useEffect, useState } from 'react';
import { Container, FlatList } from './styles';

// Api
import api from '~/services/api';

// Components
import CardFundos from '~/components/CardFundos';
import Loading from '~/components/Loading';
import Error from '~/components/Error';
import NoResults from '~/components/NoResults';

const Fundos = () => {
  const [canPaginate, setCanPaginate] = useState(true);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      const response = await api.get('funds');

      if (limit > response.data.data.length) {
        setCanPaginate(false);
      }

      setItems(response.data.data.sort((a, b) => a.name.localeCompare(b.name)));
      setLoading(false);
      setHasError(false);
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    getPosts();
  }, [getPosts, limit]);
  const handlePaginate = useCallback(() => {
    if (canPaginate) {
      setLimit((old) => old + 10);
    }
  }, [canPaginate]);

  const renderItem = useCallback(({ item }) => <CardFundos data={item} />, []);

  return (
    <Container>
      {!hasError && !loading && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={items}
          renderItem={renderItem}
          onEndReached={() => handlePaginate()}
          onEndReachedThreshold={0.5}
        />
      )}

      {loading && <Loading />}

      {hasError && <Error screen="previdencias" onPress={getPosts} />}

      {!hasError && items.length === 0 && !loading && <NoResults />}
    </Container>
  );
};

export default Fundos;
