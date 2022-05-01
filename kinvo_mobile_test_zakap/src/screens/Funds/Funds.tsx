import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import * as S from './Funds.style';
import {MenuCard} from '../../components/MenuCard';
import {Header} from '../../components/Header';
import sharesIcon from '../../assets/icons/icon-acoes.png';
import fundsIcon from '../../assets/icons/icon-fundos.png';
import socialSecurityIcon from '../../assets/icons/icon-previdencia.png';
import {Text} from 'react-native';
import {ErrorCard} from '../../components/ErrorCard';
import {getFunds} from '../../services/api';
import {FundsForm} from '../../models/FundsForm';
import {Loading} from '../../components/Loading';
import {FlatList} from 'react-native-gesture-handler';
import {FundsCard} from '../../components/FundsCard';

type FundsScreenProp = StackNavigationProp<RootStackParamList, 'Funds'>;

export const Funds = () => {
  const [loading, setLoading] = useState(true);
  const [failedRequest, setFailedRequest] = useState(false);
  const [funds, setFunds] = useState<FundsForm[]>([]);
  const navigation = useNavigation<FundsScreenProp>();

  const getFundsInfo = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = (await getFunds()).data;
      setFunds(data);
      setFailedRequest(false);
    } catch (err) {
      setFailedRequest(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [setFunds, setFailedRequest, setLoading]);

  const renderItem = ({item}: {item: FundsForm}) => <FundsCard funds={item} />;

  const sortedFunds = funds.sort((a, b) => {
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
        onPress={() => navigation.navigate('Home')}
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
