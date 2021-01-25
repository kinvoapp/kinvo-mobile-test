import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import Title from '../Title';
import Separator from '../Separator';
import WifiError from '../WifiError';
import LoadScreen from '../LoadScreen';
import Description from '../Description';
import MinimumValue from '../MinimumValue';
import Profitability from '../Profitability';
import Classification from '../Classification';


import api from '../../services/api';

import {
  CardContainer,
  CardHeader,
  Status,
  StatusText,
  CardFooter,
} from './styles';

interface IFundsProps {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}

enum STATUS {
  common = 0,
  new = 1,
  closed = 2,
}

const FundsList: React.FC = () => {
  const [funds, setFunds] = useState<IFundsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    })

    unsubscribe();

    api.get('funds').then((response) => {
      setFunds(response.data.data.sort((dataA, dataB) => dataA.name.localeCompare(dataB.name)));
      setLoading(false);
    });
  }, []);

  const handleAddTheStatus = useCallback((status: number) => {
    switch(status) {
      case STATUS.new:
        return (
          <Status status={status}>
            <StatusText>Novo</StatusText>
          </Status>
        )
      case STATUS.closed:
        return (
          <Status status={status}>
            <StatusText>Fechado</StatusText>
          </Status>
        )
      default:
        break;
      }
  }, []);

  return (
    <>
      {!isConnected && <WifiError text="fundos" navigateTo="Funds" />}
      {(isConnected && loading) && <LoadScreen /> }
      {funds &&
      funds.map((fund) => (
        <CardContainer key={fund.id} status={fund.status}>
          <CardHeader>
            <View>
              <Title
                title={fund.name}
                fontSize={14}
                disabled={fund.status === STATUS.closed}
                flexWrap="wrap"
              />
              <Description
                description={fund.type}
                disabled={fund.status === STATUS.closed}
              />
            </View>
            { handleAddTheStatus(fund.status) }
          </CardHeader>
          <Separator />
          <CardFooter>
            <Classification rating={fund.rating} disabled={fund.status === STATUS.closed} />
            <MinimumValue price={fund.minimumValue} disabled={fund.status === STATUS.closed} />
            <Profitability percentage={fund.profitability} disabled={fund.status === STATUS.closed} />
          </CardFooter>
        </CardContainer>
      ))}
    </>
  );
};

export default FundsList;
