import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import api from '../../services/api';

import Separator from '../Separator';
import WifiError from '../WifiError';
import Description from '../Description';
import Profitability from '../Profitability';
import MinimumValue from '../MinimumValue';
import LoadScreen from '../LoadScreen';
import Title from '../Title';

import {
  ButtonContainer,
  FiltersButton,
  FiltersButtonText,
  SeparatorView,
  CardContainer,
  CardFooter,
  ViewTax,
  TaxText,
  TaxValue,
  ViewRedemptionTerm,
  RedemptionTermText,
  RedemptionTerm,
  MessageView,
} from './styles';

interface IPrivatePensionData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

enum FILTER {
  withoutTax = 'withoutTax',
  minimumValue = 'minimumValue',
  redemptionDayAfter = 'redemptionDayAfter',
}

const PrivatePensionList: React.FC = () => {
  const [privatePensions, setPrivatePensions] = useState<IPrivatePensionData[]>([]);
  const [privatePensionsBackup, setPrivatePensionsBackup] = useState<IPrivatePensionData[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [isWithoutTaxFilterSelected, setIsWithoutTaxFilterSelected] = useState(false);
  const [isMinimumValueFilterSelected, setIsMinimumValueFilterSelected] = useState(false);
  const [isRedemptionDayAfterFilterSelected, setIsRedemptionDayAfterFilterSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    unsubscribe();

    api.get('pension').then((response) => {
      setPrivatePensions(response.data.data.sort((dataA, dataB) => dataA.name.localeCompare(dataB.name)));
      setPrivatePensionsBackup(response.data.data.sort((dataA, dataB) => dataA.name.localeCompare(dataB.name)));
      setLoading(false);
    });
  }, []);

  const handleSelected = useCallback((filter: string) => {
    switch (filter) {
      case FILTER.withoutTax:
        setIsWithoutTaxFilterSelected(!isWithoutTaxFilterSelected);
        break;
      case FILTER.minimumValue:
        setIsMinimumValueFilterSelected(!isMinimumValueFilterSelected);
        break;
      case FILTER.redemptionDayAfter:
        setIsRedemptionDayAfterFilterSelected(!isRedemptionDayAfterFilterSelected);
        break;
      default:
        break;
    }
  }, [isWithoutTaxFilterSelected, isMinimumValueFilterSelected, isRedemptionDayAfterFilterSelected]);


  const privatePensionsFiltered = useCallback(() => {
    let filtersToShowInTheScreen: IPrivatePensionData[] = privatePensionsBackup;

    filters.forEach(filter => {
      switch (filter) {
        case FILTER.withoutTax:
          filtersToShowInTheScreen =  filtersToShowInTheScreen.filter(item => item.tax === 0)
          break;
        case FILTER.minimumValue:
          filtersToShowInTheScreen = filtersToShowInTheScreen.filter(item => item.minimumValue === 100)
          break;
        case FILTER.redemptionDayAfter:
          filtersToShowInTheScreen = filtersToShowInTheScreen.filter(item => item.redemptionTerm === 1)
          break
        default:
          break;
      }
    })
    setPrivatePensions(filtersToShowInTheScreen)
  }, [filters, privatePensionsBackup])

  const handleClickFilterButton = useCallback((filter: string) => {
    const filterAddedIntoArray = filters;
    if (filterAddedIntoArray.includes(filter)) {
      const indexAboutTheFilter = filterAddedIntoArray.indexOf(filter);
      filterAddedIntoArray.splice(indexAboutTheFilter, 1);
      setFilters(filterAddedIntoArray);
    } else {
      filterAddedIntoArray.push(filter);
      setFilters(filterAddedIntoArray);
    }
    privatePensionsFiltered();
    handleSelected(filter);
  }, [filters, handleSelected, privatePensionsFiltered]);


  return (
    <>
      <ButtonContainer>
        <FiltersButton
          onPress={() => handleClickFilterButton(FILTER.withoutTax)}
          selected={isWithoutTaxFilterSelected}
        >
          <FiltersButtonText selected={isWithoutTaxFilterSelected}>SEM TAXA</FiltersButtonText>
        </FiltersButton>
        <FiltersButton
          onPress={() => handleClickFilterButton(FILTER.minimumValue)}
          selected={isMinimumValueFilterSelected}
        >
          <FiltersButtonText selected={isMinimumValueFilterSelected}>R$ 100,00</FiltersButtonText>
        </FiltersButton>
        <FiltersButton
          onPress={() => handleClickFilterButton(FILTER.redemptionDayAfter)}
          selected={isRedemptionDayAfterFilterSelected}
        >
          <FiltersButtonText selected={isRedemptionDayAfterFilterSelected}>D+1</FiltersButtonText>
        </FiltersButton>
      </ButtonContainer>
      <SeparatorView>
        <Separator />
      </SeparatorView>

      {!isConnected && <WifiError text="previdências" navigateTo="Dashboard" />}
      {(isConnected && loading) && <LoadScreen /> }
      {(privatePensions.length === 0 && !loading) && (
        <MessageView>
          <Text style={{ fontSize: 14, color: '#627179',  textAlign: 'center' }}>
            Nenhum resultado foi encontrado para os filtros selecionados.
          </Text>
        </MessageView>
      )}
      {privatePensions.length !== 0 &&
        privatePensions.map((privatePension) => (
          <CardContainer key={privatePension.id}>
            <View>
              <Title title={privatePension.name} />
              <Description description={privatePension.type} />
            </View>
            <Separator />
            <CardFooter>
              <MinimumValue price={privatePension.minimumValue} />
              <ViewTax>
                <TaxText>Taxa: </TaxText>
                <TaxValue>{privatePension.tax}%</TaxValue>
              </ViewTax>
              <ViewRedemptionTerm>
                <RedemptionTermText>Resgate: </RedemptionTermText>
                <RedemptionTerm>D+{privatePension.redemptionTerm}</RedemptionTerm>
              </ViewRedemptionTerm>
              <Profitability percentage={privatePension.profitability} />
            </CardFooter>
          </CardContainer>
      ))}
    </>
  );
}

export default PrivatePensionList;


