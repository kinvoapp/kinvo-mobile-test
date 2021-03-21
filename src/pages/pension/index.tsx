import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
///components
import KinButtonFilter from '../../components/button/button_filter';
import KinCardDefault from '../../components/card/card_default';
import KinDivider from '../../components/divider';
import KinHeader from '../../components/header';
import KinCenter from '../../components/center';
import KinGroupError from '../../components/error';
///apiservice
import {fetchPensions} from '../../services/apiService';
///utils
import {getTagFund, sortByName} from '../../utils/utils';

///styles and colors
import Colors from '../../resources/colors';
import {
  Container,
  ContentCardPension,
  ContentMenuPension,
  divider,
} from './styles';

enum casesFilterType {
  TAX,
  MINIMUMVALUE,
  REDEMPTIONTERM,
}
export default function PensionPage({navigation: {goBack}}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IgetPensions[]>();
  const [filter, setFilter] = useState<IgetPensions[]>();
  const [casesFilter, setCasesFilterType] = useState<casesFilterType[]>([]);

  useEffect(() => {
    setPensions();
  }, []);

  useEffect(() => {
    if (data) {
      const result = onChangeFilters(data, casesFilter);
      result && setFilter([...result]);
    }
  }, [casesFilter, data]);

  const setPensions = async () => {
    setLoading(true);
    const result = await fetchPensions();
    const orderly = result?.sort((a, b) => sortByName(a.name, b.name));
    setData(orderly);
    setLoading(false);
  };

  const setFiltersCase = (caseSelected: casesFilterType) => {
    const included = casesFilter.includes(caseSelected);

    ///verifica se aquela opção de filtro está na lista de `casesFilter`. Se estiver é retirado o filtro da lista. se não, é adicionado.
    if (!included) {
      setCasesFilterType(oldArray => [...oldArray, caseSelected]);
    } else {
      const removeCaseSelected = casesFilter.filter(e => e !== caseSelected);
      setCasesFilterType([...removeCaseSelected]);
    }
  };

  const onChangeFilters = (
    filtered: IgetPensions[],
    cases: casesFilterType[],
  ) => {
    cases.forEach(useCase => {
      if (filtered) {
        switch (useCase) {
          case casesFilterType.MINIMUMVALUE:
            filtered = filtered?.filter(e => e.minimumValue === 100);
            break;
          case casesFilterType.REDEMPTIONTERM:
            filtered = filtered?.filter(e => e.redemptionTerm === 1);
            break;
          case casesFilterType.TAX:
            filtered = filtered?.filter(e => e.tax === 0);
            break;
          default:
            filtered = [];
            break;
        }
      }
    });

    return filtered;
  };

  const render = () => {
    if (loading) {
      return (
        <KinCenter>
          <ActivityIndicator size="large" color={Colors.primary} />
        </KinCenter>
      );
    } else if (!data || data.length <= 0) {
      return (
        <KinCenter>
          <KinGroupError
            title="Ocorreu um erro."
            subtitle="Não foi possível se conectar ao banco de fundos."
            onPress={() => setPensions()}
          />
        </KinCenter>
      );
    } else {
      const result = filter ? filter : data;
      if (filter && filter?.length <= 0) {
        return (
          <KinGroupError subtitle="Nenhum resultado foi encontrado para os filtros selecionados." />
        );
      }

      return result.map((e, index) => (
        <ContentCardPension key={index}>
          <KinCardDefault
            title={e.name}
            subtitle={e.type}
            tag={getTagFund(e.status)}
            profitability={e.profitability}
            minimumValue={e.minimumValue}
            tax={e.tax}
            redemption={e.redemptionTerm}
          />
        </ContentCardPension>
      ));
    }
  };
  return (
    <Container>
      <KinHeader title="Previdência" onPress={() => goBack()} />

      <ContentMenuPension>
        <KinButtonFilter
          title="SEM TAXA"
          onPress={() => setFiltersCase(casesFilterType.TAX)}
        />
        <KinButtonFilter
          title="R$ 100,00"
          onPress={() => setFiltersCase(casesFilterType.MINIMUMVALUE)}
        />
        <KinButtonFilter
          title="D+1"
          onPress={() => setFiltersCase(casesFilterType.REDEMPTIONTERM)}
        />
      </ContentMenuPension>
      <KinDivider style={divider} />
      {render()}
    </Container>
  );
}
