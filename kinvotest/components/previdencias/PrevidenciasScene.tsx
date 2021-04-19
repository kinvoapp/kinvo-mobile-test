import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE, NAV_BORDER_COLOR } from '../../assets/constants/colors';
import { Spinner } from '../common/Spinner';
import { Filter } from './components/filter/Filter';
import { applyFilters, setSelectedFilter } from './components/filter/utils/filter';
import { PrevidenciasCard } from './components/PrevidenciasCard';
import { PrevidenciasEmptyListComponent } from './components/PrevidenciasEmptyListComponent';
import { PrevidenciasErrorComponent } from './components/PrevidenciasErrorComponent';
import { defaultOptions } from './constants/contants';
import { FilterFunction, FilterOption, PrevidenciasRequest, PrevidenciasRequestData } from './constants/types';

const renderItem = ({ item }: { item: PrevidenciasRequestData; index: number }) => {
  const { id, name, type, minimumValue, tax, redemptionTerm, profitability } = item;

  return (
    <PrevidenciasCard
      id={id}
      name={name}
      type={type}
      minimumValue={minimumValue}
      tax={tax}
      redemptionTerm={redemptionTerm}
      profitability={profitability}
    />
  );
};

// função que faz o get na API da lista de previdências. Dá throw no error caso exista para ser tratado pela tela.
const getPrevidencias = async (): Promise<PrevidenciasRequest | null> => {
  try {
    const response = await axios.get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/pension');

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

export const PrevidenciasScene = () => {
  const [loading, setLoading] = useState(true);
  const [requestData, setRequestData] = useState<PrevidenciasRequestData[]>([]);
  const [options, setOptions] = useState<FilterOption[]>(defaultOptions);
  const [currentFilters, setCurrentFilters] = useState<FilterFunction[]>([]);
  const [filteredData, setFilteredData] = useState<PrevidenciasRequestData[] | null>(null);
  const [connected, setConnected] = useState(true);

  // Faz o get das previdencias da API, em caso de falha coloca a flag de erro como true. Também tem uma flag de loading. Como só é invocada uma vez, o hook não dá watch em nenhuma variável da aplicação.
  useEffect(() => {
    //Função invocada imediatamente
    (async () => {
      try {
        const requestData = await getPrevidencias();
        const { data } = requestData || { data: [] };

        setRequestData(data);
        if (requestData) {
          setFilteredData(data);
        }
      } catch (error) {
        console.error(error);
        setConnected(false);
      }
      setLoading(false);
    })();
  }, []);

  //Hook que aplica os filtros toda vez que a variável "currentFilters" é alterada.
  useEffect(() => {
    if (requestData) applyFilters({ currentFilters, requestData, setFilteredData });
  }, [currentFilters]);

  const { bgContainer, dividerStyle: divisorStyle, listContainerStyle, filterListContainerStyle } = styles;

  if (loading) return <Spinner />;
  else {
    if (connected && filteredData !== null) {
      return (
        <View style={bgContainer}>
          <View style={{ flex: 3 }}>
            <Filter
              options={options}
              setOptions={setOptions}
              setFilter={setCurrentFilters}
              contentContainerStyle={filterListContainerStyle}
              onPressFilter={setSelectedFilter}
            />
            <View style={divisorStyle} />
            <FlatList
              renderItem={renderItem}
              data={filteredData}
              ListEmptyComponent={PrevidenciasEmptyListComponent}
              contentContainerStyle={listContainerStyle}
              keyExtractor={(_, index: number) => index.toString()}
            />
          </View>
        </View>
      );
    } else {
      return <PrevidenciasErrorComponent />;
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
