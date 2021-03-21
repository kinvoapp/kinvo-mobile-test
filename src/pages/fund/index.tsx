import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import KinCardDefault from '../../components/card/card_default';
import KinCenter from '../../components/center';
import KinGroupError from '../../components/error';
import KinHeader from '../../components/header';
import Colors from '../../resources/colors';
import {fetchFunds} from '../../services/apiService';
import {getTagFund, sortByName} from '../../utils/utils';
import {Container, ContentCardFund} from './styles';

export default function FundPage({navigation: {goBack}}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IgetFunds[]>();
  useEffect(() => {
    setFunds();
  }, []);

  const setFunds = async () => {
    setLoading(true);
    const result = await fetchFunds();
    const orderly = result?.sort((a, b) => sortByName(a.name, b.name));
    setData(orderly);
    setLoading(false);
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
            onPress={() => setFunds()}
          />
        </KinCenter>
      );
    } else {
      return data.map((e, index) => (
        <ContentCardFund key={index}>
          <KinCardDefault
            title={e.name}
            subtitle={e.type}
            tag={getTagFund(e.status)}
            rating={e.rating}
            profitability={e.profitability}
            minimumValue={e.minimumValue}
            isClosed={e.status === 2}
          />
        </ContentCardFund>
      ));
    }
  };
  return (
    <Container>
      <KinHeader title="Fundos" onPress={() => goBack()} />
      {render()}
    </Container>
  );
}
