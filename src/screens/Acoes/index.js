import React, { useCallback, useEffect, useState } from 'react';

// Styles
import { Container, FlatList } from './styles';

// Api
import api from '~/services/api';

// Components
import CardAcoes from '~/components/CardAcoes';
import Loading from '~/components/Loading';
import Error from '~/components/Error';
import NoResults from '~/components/NoResults';

const Acoes = () => {
  const [canPaginate, setCanPaginate] = useState(true);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      const response = await api.get('stocks');

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

  const setFavourite = useCallback(
    (id) => {
      const tempFavourites = items.filter((item) => {
        if (item.id === id) {
          item.favourite = !item.favourite;
        }
        return item.favourite;
      });

      const tempUnfavourites = items.filter((item) => !item.favourite);

      setItems([...tempFavourites, ...tempUnfavourites]);
    },
    [items]
  );

  const renderItem = useCallback(
    ({ item }) => <CardAcoes data={item} clickFav={(id) => setFavourite(id)} />,
    [setFavourite]
  );

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
    </Container>
  );
};

export default Acoes;
