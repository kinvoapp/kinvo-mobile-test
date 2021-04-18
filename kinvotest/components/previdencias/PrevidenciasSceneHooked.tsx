import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE, NAV_BORDER_COLOR } from '../../assets/constants/colors';
import { Spinner } from '../common/Spinner';
import { PrevidenciasEmptyListComponent } from './PrevidenciasEmptyListComponent';
import { PrevidenciasErrorComponent } from './PrevidenciasErrorComponent';
import { PrevidenciasFilter } from './PrevidenciasFilter';

export interface PrevidenciasRequestData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

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
  filter: () => void;
  isSelected: Boolean;
}

const options = [
  {
    title: PrevidenciasSceneFilterEnum.Resgate,
    filter: (requestData: PrevidenciasRequestData) => {
      return requestData.redemptionTerm === 1;
    },
  },
  {
    title: PrevidenciasSceneFilterEnum.Taxa,
    filter: (requestData: PrevidenciasRequestData) => {
      return requestData.tax === 0;
    },
  },
  {
    title: PrevidenciasSceneFilterEnum.ValorMinimo,
    filter: (requestData: PrevidenciasRequestData) => {
      return requestData.minimumValue < 100;
    },
  },
];

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
    console.log(error);

    return null;
  }
};

export const PrevidenciasScene = () => {
  const [loading, setLoading] = useState(true);
  const [requestData, setRequestData] = useState<PrevidenciasRequest | null>(null);
  const [filteredData, setFilteredData] = useState<PrevidenciasRequestData[] | null>(null);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const requestData = await getPrevidencias();
        setRequestData(requestData);
      } catch (error) {
        console.error(error);
        setConnected(false);
      }
      setLoading(false);
    })();
  }, []);

  const { bgContainer, divisorStyle, listContainerStyle } = styles;

  if (loading) return <Spinner />;
  else {
    if (connected) {
      return (
        <View style={bgContainer}>
          <View style={{ flex: 3 }}>
            <PrevidenciasFilter requestData={requestData} options={options} callback={setFilteredData} />
            <View style={divisorStyle} />
            {/* <FlatList
              renderItem={this.renderItem}
              data={this.state.filteredData}
              extraData={[this.state.activeFilter]}
              ListEmptyComponent={PrevidenciasEmptyListComponent}
              contentContainerStyle={listContainerStyle}
              keyExtractor={(_, index: number) => index.toString()}
            /> */}
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
