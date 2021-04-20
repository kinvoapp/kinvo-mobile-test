import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE } from '../../assets/constants/colors';
import { ACOES_URL } from '../../assets/constants/url';
import { EmptyListComponent } from '../common/EmptyListComponent';
import { ErrorComponent } from '../common/ErrorComponent';
import { Spinner } from '../common/Spinner';
import { RequestData } from '../previdencias/constants/types';
import { AcoesData, AcoesRequestData } from './constants/types';
import { AcoesCard } from './components/AcoesCard';
import _ from 'lodash';

export interface SetFavoriteFunction {
  array: AcoesData[];
  index: number;
  setFunction: (array: AcoesData[]) => void;
}

// função que faz o get na API da lista de previdências. Dá throw no error caso exista para ser tratado pela tela.
const getAcoes = async (): Promise<RequestData<AcoesRequestData> | null> => {
  try {
    const response = await axios.get(ACOES_URL);

    const { status, data } = response;

    if (status === 200) {
      return data;
    } else {
      throw new Error(`Erro no processamento do request. Servidor retornou status ${status}`);
    }
  } catch (error) {
    throw new Error(error);
  }
};

const doFavorite = ({ array, index, setFunction }: SetFavoriteFunction) => {
  //Clona o array recebido com todos os itens
  const modifiedArray = _.clone(array);

  // modificar o valor do elemento
  modifiedArray[index].favorite = !modifiedArray[index].favorite;

  // ordena por favoritos e ordem alfabética
  const orderedArray = _.orderBy(modifiedArray, ['favorite', 'name'], ['desc', 'asc']);

  //Altera o state da tela que possui os itens a serem exibidos
  setFunction(orderedArray);
};

const renderItem = ({ item, setFunction }: { item: AcoesData; setFunction: () => void }) => {
  return <AcoesCard item={item} onPress={setFunction} />;
};

export const AcoesScene = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [requestData, setRequestData] = useState<AcoesRequestData[]>([]);
  const [showableData, setShowableData] = useState<AcoesData[]>([]);
  const [connected, setConnected] = useState<Boolean>(true);

  //   Faz o get das previdencias da API, em caso de falha coloca a flag de erro como true. Também tem uma flag de loading. Como só é invocada uma vez, o hook não dá watch em nenhuma variável da aplicação.
  useEffect(() => {
    //Função invocada imediatamente
    (async () => {
      try {
        const apiData = await getAcoes();
        const { data } = apiData || { data: [] };

        setRequestData(data);

        //adiciona propriedade "favorite" no objeto
        const showableData: AcoesData[] = _.map(data, (i) => {
          return { ...i, favorite: false };
        });

        const orderedData = _.orderBy(showableData, ['favorite', 'name'], ['desc', 'asc']);

        setShowableData(orderedData);
      } catch (error) {
        console.error(error);
        setConnected(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const { bgContainer, listContainerStyle } = styles;

  if (loading) return <Spinner />;
  else {
    if (connected && showableData !== null) {
      return (
        <View style={bgContainer}>
          <FlatList
            renderItem={({ item, index }) =>
              renderItem({
                item,
                setFunction: () => doFavorite({ array: showableData, index: index, setFunction: setShowableData }),
              })
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
  },
  listContainerStyle: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
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

  cardSubtitleStyle: {
    color: DEFAULT_BORDER_COLOR,
    fontFamily: 'ms-regular',
    fontSize: 10,
  },
  navContainer: {
    flex: 1,
  },
});
