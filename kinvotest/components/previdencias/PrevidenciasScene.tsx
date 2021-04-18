import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE, NAV_BORDER_COLOR } from '../../assets/constants/colors';
import React, { Component } from 'react';
import { PrevidenciasCard, PrevidenciasCardProps } from './PrevidenciasCard';
import _ from 'lodash';
import { PrevidenciasFilterButton } from './PrevidenciasFilterButton';
import { PrevidenciasEmptyListComponent } from './PrevidenciasEmptyListComponent';

import { PrevidenciasErrorComponent } from './PrevidenciasErrorComponent';
import axios from 'axios';
import { Spinner } from '../common/Spinner';

export interface PrevidenciasRequestData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

export enum PrevidenciasSceneFilterEnum {
  Taxa = 'sem taxa',
  ValorMinimo = '100',
  Resgate = 'D+1',
  Todos = 'todos',
}

interface PrevidenciasSceneState {
  loading: Boolean;
  activeFilter: PrevidenciasSceneFilterEnum;
  requestData: PrevidenciasRequestData[] | null;
  filteredData: PrevidenciasRequestData[] | null;
  connected: Boolean;
}

interface PrevidenciasRequest {
  success: Boolean;
  data: PrevidenciasRequestData[];
  error: Boolean | null;
}

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

export class PrevidenciasScene extends Component<{}, PrevidenciasSceneState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      activeFilter: PrevidenciasSceneFilterEnum.Todos,
      requestData: [],
      filteredData: [],
      connected: true,
    };
  }

  async componentDidMount() {
    const data = await getPrevidencias();
    if (!data) {
      this.setState({ connected: false, requestData: null });
    } else {
      this.setState({ connected: true, requestData: data });
    }
    this.filterData();
    this.setState({ loading: false });
  }

  filterData = async () => {
    const { data } = this.state.requestData;

    let filterFunction: (requestData: PrevidenciasRequestData) => void;

    if (this.state.activeFilter === PrevidenciasSceneFilterEnum.Resgate) {
      filterFunction = (requestData) => {
        return requestData.redemptionTerm === 1;
      };
    } else if (this.state.activeFilter === PrevidenciasSceneFilterEnum.ValorMinimo) {
      filterFunction = (requestData) => {
        return requestData.minimumValue < 100;
      };
    } else if (this.state.activeFilter === PrevidenciasSceneFilterEnum.Taxa) {
      filterFunction = (requestData) => {
        return requestData.tax === 0;
      };
    } else {
      filterFunction = () => {
        return true;
      };
    }

    const filteredData = _.filter(data, filterFunction);

    const orderedData = _.orderBy(filteredData, ['name'], ['asc']);

    this.setState({ filteredData: orderedData });
  };

  changeFilter = async ({ filterValue }: { filterValue: PrevidenciasSceneFilterEnum }) => {
    //discutir com vitor
    await this.setState({
      activeFilter: filterValue,
      loading: true,
    });

    this.filterData(this.state.filteredData);
    this.setState({ loading: false });
  };

  renderItem = ({ item }: { item: PrevidenciasCardProps; index: number }) => {
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

  render = () => {
    const { bgContainer, divisorStyle, listContainerStyle } = styles;

    if (this.state.loading) return <Spinner />;
    else {
      if (this.state.connected) {
        return (
          <View style={bgContainer}>
            <View style={{ flex: 3 }}>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <PrevidenciasFilterButton
                  title={'SEM TAXA'}
                  onPress={() => this.changeFilter({ filterValue: PrevidenciasSceneFilterEnum.Taxa })}
                  isSelected={this.state.activeFilter === PrevidenciasSceneFilterEnum.Taxa}
                />
                <PrevidenciasFilterButton
                  title={'R$100,00'}
                  isSelected={this.state.activeFilter === PrevidenciasSceneFilterEnum.ValorMinimo}
                  onPress={() => this.changeFilter({ filterValue: PrevidenciasSceneFilterEnum.ValorMinimo })}
                />
                <PrevidenciasFilterButton
                  title={'D+1'}
                  isSelected={this.state.activeFilter === PrevidenciasSceneFilterEnum.Resgate}
                  onPress={() => this.changeFilter({ filterValue: PrevidenciasSceneFilterEnum.Resgate })}
                />
              </View>
              <View style={divisorStyle} />
              <FlatList
                renderItem={this.renderItem}
                data={this.state.filteredData}
                extraData={[this.state.activeFilter]}
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
}

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
