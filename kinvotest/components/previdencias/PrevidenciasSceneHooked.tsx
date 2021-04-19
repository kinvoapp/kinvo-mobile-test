import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE, NAV_BORDER_COLOR } from '../../assets/constants/colors';
import { Spinner } from '../common/Spinner';
import { PrevidenciasEmptyListComponent } from './PrevidenciasEmptyListComponent';
import { PrevidenciasErrorComponent } from './PrevidenciasErrorComponent';
import { PrevidenciasFilter } from './PrevidenciasFilter';
import _ from 'lodash';
import { PrevidenciasCard } from './PrevidenciasCard';

export interface PrevidenciasRequestData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

export type FilterFunction = (el: PrevidenciasRequestData) => Boolean;

interface PrevidenciasRequest {
  success: Boolean;
  data: PrevidenciasRequestData[];
  error: Boolean | null;
}

export enum PrevidenciasSceneFilterEnum {
  Taxa = 'Sem Taxa',
  ValorMinimo = 'R$100,00',
  Resgate = 'D+1',
}

export interface FilterOption {
  title: string;
  filter: FilterFunction;
  isSelected: Boolean;
}

const defaultOptions: FilterOption[] = [
  {
    title: PrevidenciasSceneFilterEnum.Resgate,
    filter: (requestData: PrevidenciasRequestData) => {
      return requestData.redemptionTerm === 1;
    },
    isSelected: false,
  },
  {
    title: PrevidenciasSceneFilterEnum.Taxa,
    filter: (requestData: PrevidenciasRequestData) => {
      return requestData.tax === 0;
    },
    isSelected: false,
  },
  {
    title: PrevidenciasSceneFilterEnum.ValorMinimo,
    filter: (requestData: PrevidenciasRequestData) => {
      return requestData.minimumValue < 100;
    },
    isSelected: false,
  },
];

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

const setSelectedFilter = ({
  option: { title },
  setFilter,
  setOptions,
}: {
  option: FilterOption;
  setOptions: (newOptions: FilterOption[]) => void;
  setFilter: (filterArray: Array<FilterFunction>) => void;
}) => {
  let newOptions = defaultOptions;

  const selectedFilter = _.findIndex(newOptions, { title });

  if (selectedFilter !== -1) {
    const { isSelected } = newOptions[selectedFilter];
    newOptions[selectedFilter].isSelected = !isSelected;
  }

  setOptions(newOptions);

  const filterArray = buildFilters({ currentOptions: newOptions });

  setFilter(filterArray);
};

const buildFilters = ({ currentOptions }: { currentOptions: FilterOption[] }): Array<FilterFunction> => {
  const arrayFilters: Array<FilterFunction> = [];
  _.forEach(currentOptions, (option: FilterOption) => {
    if (option.isSelected) {
      arrayFilters.push(option.filter);
    }
  });

  return arrayFilters;
};

const applyFilters = ({
  currentFilters,
  requestData,
  setFilteredData,
}: {
  currentFilters: Array<FilterFunction>;
  requestData: PrevidenciasRequestData[];
  setFilteredData: (filteredData: PrevidenciasRequestData[]) => void;
}) => {
  let filteredData = requestData;

  if (currentFilters.length > 0) {
    filteredData = _.filter(requestData, (item) => {
      for (let filter of currentFilters) {
        if (!filter(item)) {
          return false;
        }
      }
      return true;
    });
  }

  setFilteredData(filteredData);
};

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
  const [currentFilters, setCurrentFilters] = useState([]);
  const [filteredData, setFilteredData] = useState<PrevidenciasRequestData[] | null>(null);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
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

  useEffect(() => {
    if (requestData) applyFilters({ currentFilters, requestData, setFilteredData });
  }, [currentFilters]);

  const { bgContainer, divisorStyle, listContainerStyle } = styles;

  if (loading) return <Spinner />;
  else {
    if (connected && filteredData !== null) {
      return (
        <View style={bgContainer}>
          <View style={{ flex: 3 }}>
            <PrevidenciasFilter
              options={options}
              setOptions={setOptions}
              setFilter={setCurrentFilters}
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
  divisorStyle: {
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
