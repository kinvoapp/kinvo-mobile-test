import { Button, FlatList, StyleSheet, View } from 'react-native';
// import { HomeCardsArray } from './constants';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE, NAV_BORDER_COLOR } from '../../assets/constants/colors';

import React, { Component } from 'react';
import { PrevidenciasCard, PrevidenciasCardProps } from './PrevidenciasCard';

export interface PrevidenciasRequestData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

const PrevidenciasRequest: { success: Boolean; data: PrevidenciasRequestData[] } = {
  success: true,
  data: [
    {
      id: 1,
      name: 'Adam XP Seg Prev I FIC FIM',
      type: 'Multimercados',
      minimumValue: 100,
      tax: 0,
      redemptionTerm: 10,
      profitability: 10.59,
    },
    {
      id: 2,
      name: 'Brasil Capital 100 XP Seg Advisory FIC FIA',
      type: 'Multimercados',
      minimumValue: 100,
      tax: 0,
      redemptionTerm: 2,
      profitability: -7.05,
    },
    {
      id: 3,
      name: 'Capitânia Prev Advisory XP Seg FIRF CP',
      type: 'Renda Fixa Pós',
      minimumValue: 300,
      tax: 2.67,
      redemptionTerm: 1,
      profitability: 5.12,
    },
    {
      id: 4,
      name: 'Icatu Seg Kadima FIM CP Prev',
      type: 'Multimercados',
      minimumValue: 400,
      tax: 0.45,
      redemptionTerm: 5,
      profitability: 19.26,
    },
    {
      id: 5,
      name: 'XP Horizonte XP Seg FIRF Prev',
      type: 'Renda Fixa Pré',
      minimumValue: 500,
      tax: 0,
      redemptionTerm: 1,
      profitability: 0,
    },
  ],
  error: null,
};

export class PrevidenciasScene extends Component<{}, {}> {
  async componentDidMount() {}
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
    const { bgContainer, divisorStyle } = styles;
    const { success, data } = PrevidenciasRequest;

    return (
      <View style={bgContainer}>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button title={'SEM TAXA'} onPress={() => null} />
            <Button title={'R$100,00'} onPress={() => null} />
            <Button title={'D+1'} onPress={() => null} />
          </View>
          <View style={divisorStyle} />
          <FlatList renderItem={this.renderItem} data={data} keyExtractor={(_, index: number) => index.toString()} />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
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
    marginHorizontal: 10,
    marginVertical: 10,
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
