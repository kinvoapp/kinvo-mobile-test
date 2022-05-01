import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import {Header} from '../../components/Header';
import * as S from './PensionScreen.style';
import {Loading} from '../../components/Loading';
import {PensionForm} from '../../models/PensionForm';
import {getPension} from '../../services/api';
import {PensionCard} from '../../components/PensionCard';
import {ErrorCard} from '../../components/ErrorCard';

type PensionScreenProp = StackNavigationProp<
  RootStackParamList,
  'PensionScreen'
>;

enum FilterOptions {
  minimumValuePension,
  zeroTaxPensions,
  redemptiomOfOne,
  none,
}

export const PensionScreen = () => {
  const [loading, setLoading] = useState(true);
  const [failedRequest, setFailedRequest] = useState(false);
  const [filterOption, setFilterOption] = useState<FilterOptions>(
    FilterOptions.none,
  );
  const [pensionList, setPensionList] = useState<PensionForm[]>([]);
  const [filteredPension, setFilteredPension] = useState<PensionForm[]>([]);
  const navigation = useNavigation<PensionScreenProp>();

  const getPensionInfo = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = (await getPension()).data;
      setPensionList(data);
      setFilteredPension(data)
      setFailedRequest(false)
    } catch (err) {
      setFailedRequest(true);
    } finally {
      setLoading(false);
    }
  }, [setPensionList, setFailedRequest, setLoading]);

  const renderItem = ({item}: {item: PensionForm}) => (
    <PensionCard pension={item} />
  );

  const handleFilter = (option: FilterOptions) => {

    if(option === filterOption) {
      setFilterOption(FilterOptions.none)
      setFilteredPension(pensionList)
      return
    }

    switch (option) {
      case FilterOptions.minimumValuePension:
        const minimumValuePensions = pensionList.filter(
          pension => pension.minimumValue === 100,
        );
        setFilteredPension(minimumValuePensions);
        break;
      case FilterOptions.redemptiomOfOne:
        const redemptiomOfOne = pensionList.filter(
          pension => pension.redemptionTerm === 1,
        );
        setFilteredPension(redemptiomOfOne);
        break;
      case FilterOptions.zeroTaxPensions:
        const zeroTaxPensions = pensionList.filter(
          pension => pension.tax === 0,
        );
        setFilteredPension(zeroTaxPensions);
        break;
      case FilterOptions.none:
        setFilteredPension(pensionList);
        break;
    }
    setFilterOption(option);
  };

  const sortedpensionList = filteredPension.sort((a, b) => {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return -1;
  });

  useEffect(() => {
    getPensionInfo();
  }, [getPensionInfo]);

  return (
    <S.Container>
      <Header
        title="Previdências"
        isBackButton={true}
        onPress={() => navigation.navigate('HomeScreen')}
      />

      {loading ? (
        <S.loadingContainer>
          <Loading />
        </S.loadingContainer>
      ) : failedRequest ? (
        <ErrorCard onPress={getPensionInfo} />
      ) : (
        <S.InnerContainer>
          <S.FilterWraper>
            <S.PressableFilter
              isPressed={filterOption === FilterOptions.zeroTaxPensions}
              onPress={() => handleFilter(FilterOptions.zeroTaxPensions)}>
              <S.FilterText isPressed={filterOption === FilterOptions.zeroTaxPensions}>
                SEM TAXA
              </S.FilterText>
            </S.PressableFilter>

            <S.PressableFilter
              isPressed={filterOption === FilterOptions.minimumValuePension}
              onPress={() => handleFilter(FilterOptions.minimumValuePension)}>
              <S.FilterText isPressed={filterOption === FilterOptions.minimumValuePension}>
                R$100,00
              </S.FilterText>
            </S.PressableFilter>

            <S.PressableFilter
              isPressed={filterOption === FilterOptions.redemptiomOfOne}
              onPress={() => handleFilter(FilterOptions.redemptiomOfOne)}>
              <S.FilterText isPressed={filterOption === FilterOptions.redemptiomOfOne}>D+1</S.FilterText>
            </S.PressableFilter>
          </S.FilterWraper>

          <S.CenterDivider>
            <S.DividerBorder></S.DividerBorder>
          </S.CenterDivider>

          <S.CardWraper>
            <FlatList
              style={{width: '100%'}}
              data={sortedpensionList}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </S.CardWraper>
        </S.InnerContainer>
      )}
    </S.Container>
  );
};
