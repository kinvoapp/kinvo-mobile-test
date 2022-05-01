import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import * as S from './Funds.style';
import {Header} from '../../components/Header';
import {ErrorCard} from '../../components/ErrorCard';
import {getFunds} from '../../services/api';
import {FundsForm} from '../../models/FundsForm';
import {Loading} from '../../components/Loading';
import {FlatList} from 'react-native-gesture-handler';
import {FundsCard} from '../../components/FundsCard';

type FundsScreenProp = StackNavigationProp<RootStackParamList, 'FundsScreen'>;

export const FundsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [failedRequest, setFailedRequest] = useState(false);
  const [fundList, setFundList] = useState<FundsForm[]>([]);
  const navigation = useNavigation<FundsScreenProp>();

  const getFundsInfo = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = (await getFunds()).data;
      setFundList(data);
      setFailedRequest(false);
    } catch (err) {
      setFailedRequest(true);
    } finally {
      setLoading(false);
    }
  }, [setFundList, setFailedRequest, setLoading]);

  const renderItem = ({item}: {item: FundsForm}) => <FundsCard funds={item} />;

  const sortedFunds = fundList.sort((a, b) => {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return -1;
  });

  useEffect(() => {
    getFundsInfo();
  }, [getFundsInfo]);

  return (
    <S.Container>
      <Header
        title="Fundos"
        isBackButton={true}
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <S.CardWraper>
        {loading ? (
          <Loading />
        ) : failedRequest ? (
          <ErrorCard onPress={getFundsInfo} />
        ) : (
          <FlatList
            style={{width: '100%'}}
            data={sortedFunds}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </S.CardWraper>
    </S.Container>
  );
};
