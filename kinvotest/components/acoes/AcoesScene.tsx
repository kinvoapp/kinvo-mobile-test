import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE, NAV_BORDER_COLOR } from '../../assets/constants/colors';
import { ACOES_URL } from '../../assets/constants/url';
import { EmptyListComponent } from '../common/EmptyListComponent';
import { ErrorComponent } from '../common/ErrorComponent';
import { Spinner } from '../common/Spinner';
import { RequestData } from '../previdencias/constants/types';
import { AcoesRequestData } from './constants/types';
import { AcoesCard } from './components/AcoesCard';
import _ from 'lodash';

// função que faz o get na API da lista de previdências. Dá throw no error caso exista para ser tratado pela tela.
const getAcoes = async (): Promise<RequestData<AcoesRequestData> | null> => {
  try {
    const response = await axios.get(ACOES_URL);

    const { status, data } = response;

    if (status === 200) {
      return data;
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const doFavorite = ({ array, id, setFunction }) => {
  //Clona o array recebido com todos os itens
  const modifiedArray = _.clone(array);
  // busca o elemento a ser modificado, olhando por id

  const findElement = _.findIndex(modifiedArray, (x) => x.id === id);
  // modificar o valor do elemento
  modifiedArray[findElement].favorite = !modifiedArray[findElement].favorite;

  // ordena por favoritos
  const orderedArray = _.orderBy(modifiedArray, ['favorite', 'name'], ['desc', 'asc']);

  //Altera o state da tela que possui os itens a serem exibidos
  setFunction(orderedArray);
};

const renderItem = ({ item }, setFunction) => {
  return <AcoesCard item={item} onPress={setFunction} />;
};

export const AcoesScene = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [requestData, setRequestData] = useState<AcoesRequestData[]>([]);
  const [showableData, setShowableData] = useState<AcoesRequestData[]>([]);
  const [connected, setConnected] = useState<Boolean>(true);

  //   Faz o get das previdencias da API, em caso de falha coloca a flag de erro como true. Também tem uma flag de loading. Como só é invocada uma vez, o hook não dá watch em nenhuma variável da aplicação.
  useEffect(() => {
    //Função invocada imediatamente
    (async () => {
      try {
        const requestData = await getAcoes();
        const { data } = requestData || { data: [] };
        setRequestData(data);

        const showableData = _.map(data, (i) => {
          return { ...i, favorite: false };
        });

        const orderedData = _.orderBy(showableData, ['favorite', 'name'], ['desc', 'asc']);

        setShowableData(orderedData);
      } catch (error) {
        console.error(error);
        setConnected(false);
      }
      setLoading(false);
    })();
  }, []);

  const { bgContainer, listContainerStyle } = styles;

  if (loading) return <Spinner />;
  else {
    if (connected && showableData !== null) {
      return (
        <View style={bgContainer}>
          <FlatList
            renderItem={({ item }) =>
              renderItem({ item }, () => doFavorite({ array: showableData, id: item.id, setFunction: setShowableData }))
            }
            data={showableData}
            ListEmptyComponent={<EmptyListComponent text={'Nenhuma ação foi encontrada.'} />}
            contentContainerStyle={listContainerStyle}
            keyExtractor={(_, index: number) => index.toString()}
          />
        </View>
      );
    } else {
      return <ErrorComponent />;
    }
  }
};

const styles = StyleSheet.create({
  filterListContainerStyle: {
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  listContainerStyle: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  bgContainer: {
    flex: 1,
    backgroundColor: DEFAULT_GREY,
  },
  cardTitleStyle: {
    color: DEFAULT_PURPLE,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 5,
  },
  dividerStyle: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: NAV_BORDER_COLOR,
    borderBottomWidth: 1,
  },
  cardSubtitleStyle: {
    color: DEFAULT_BORDER_COLOR,
    fontFamily: 'ms-regular',
    fontSize: 10,
  },
  navContainer: {
    flex: 1,
  },
});
