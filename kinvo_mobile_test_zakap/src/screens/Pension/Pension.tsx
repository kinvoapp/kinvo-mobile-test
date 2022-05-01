import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import {Header} from '../../components/Header';
import * as S from './Pension.style';
import {Loading} from '../../components/Loading';
import {PensionForm} from '../../models/PensionForm';
import {getPension} from '../../services/api';
import {PensionCard} from '../../components/PensionCard';
import {ErrorCard} from '../../components/ErrorCard';

type PensionScreenProp = StackNavigationProp<RootStackParamList, 'Pension'>;

export const Pension = () => {
  const [loading, setLoading] = useState(true);
  const [failedRequest, setFailedRequest] = useState(false);
  const [pressChecker, setPressChecker] = useState(2);
  const [pension, setPension] = useState<PensionForm[]>([]);
  const [filteredPension, setFilteredPension] = useState<PensionForm[]>([]);
  const navigation = useNavigation<PensionScreenProp>();

  const getPensionInfo = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = (await getPension()).data;
      setPension(data);
    } catch (err) {
      console.log(err);
      setFailedRequest(true);
    } finally {
      setLoading(false);
    }
  }, [setPension, setFailedRequest, setLoading]);

  const renderItem = ({item}: {item: PensionForm}) => (
    <PensionCard pension={item} />
  );

  const handleFilter = (number: number) => {
    if (number != pressChecker) {
      setPressChecker(number);
    }
    if (number === pressChecker) {
      setPressChecker(2);
      return setFilteredPension(pension);
    }
    if (number === 0) {
      const zeroTaxPensions = pension.filter(pension => pension.tax === 0);
      return setFilteredPension(zeroTaxPensions);
    }
    if (number === 100) {
      const minimumValuePensions = pension.filter(
        pension => pension.minimumValue === 100,
      );
      return setFilteredPension(minimumValuePensions);
    }
    if (number === 1) {
      const redemptiomOfOne = pension.filter(
        pension => pension.redemptionTerm === 1,
      );
      return setFilteredPension(redemptiomOfOne);
    }
  };

  const pensionList = filteredPension.length >= 1 ? filteredPension : pension;

  const sortedpensionList = pensionList.sort((a, b) => {
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
        onPress={() => navigation.navigate('Home')}
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
              isPressed={pressChecker === 0}
              onPress={() => handleFilter(0)}>
              <S.FilterText isPressed={pressChecker === 0}>
                SEM TAXA
              </S.FilterText>
            </S.PressableFilter>

            <S.PressableFilter
              isPressed={pressChecker === 100}
              onPress={() => handleFilter(100)}>
              <S.FilterText isPressed={pressChecker === 100}>
                R$100,00
              </S.FilterText>
            </S.PressableFilter>

            <S.PressableFilter
              isPressed={pressChecker === 1}
              onPress={() => handleFilter(1)}>
              <S.FilterText isPressed={pressChecker === 1}>D+1</S.FilterText>
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
