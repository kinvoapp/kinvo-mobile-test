import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE, NAV_BORDER_COLOR } from '../../assets/constants/colors';
import { FUNDOS_URL } from '../../assets/constants/url';
import { EmptyListComponent } from '../common/EmptyListComponent';
import { ErrorComponent } from '../common/ErrorComponent';
import { FlatListCard } from '../common/FlatListCard';
import { FlatListItemRow } from '../common/FlatListItemRow';
import { Spinner } from '../common/Spinner';
import { RequestData } from '../previdencias/constants/types';
import { FundosRequestData } from './constants/types';

const renderItem = ({ item }: { item: FundosRequestData; index: number }) => {
  const { name: title, type: subtitle, minimumValue, profitability, rating } = item;

  return (
    <FlatListCard title={title} subtitle={subtitle}>
      <>
        <FlatListItemRow label={'Classificação'} value={rating} format={''} />
        <FlatListItemRow label={'Valor Mínimo'} value={minimumValue} format={'BRL'} />
        <FlatListItemRow label={'Rentabilidade'} value={profitability} format={'profit'} />
      </>
    </FlatListCard>
  );
};

// função que faz o get na API da lista de previdências. Dá throw no error caso exista para ser tratado pela tela.
const getFundos = async (): Promise<RequestData<FundosRequestData> | null> => {
  try {
    const response = await axios.get(FUNDOS_URL);

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

export const FundosScene = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [requestData, setRequestData] = useState<FundosRequestData[]>([]);
  const [connected, setConnected] = useState<Boolean>(true);

  //   Faz o get das previdencias da API, em caso de falha coloca a flag de erro como true. Também tem uma flag de loading. Como só é invocada uma vez, o hook não dá watch em nenhuma variável da aplicação.
  useEffect(() => {
    //Função invocada imediatamente
    (async () => {
      try {
        const requestData = await getFundos();
        const { data } = requestData || { data: [] };
        setRequestData(data);
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
    if (connected && requestData !== null) {
      return (
        <View style={bgContainer}>
          <FlatList
            renderItem={renderItem}
            data={requestData}
            ListEmptyComponent={<EmptyListComponent text={'Nenhum fundo encontrado.'} />}
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
