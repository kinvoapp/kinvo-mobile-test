import React, { useEffect, useState } from 'react';
import {RoutesPublic, routing} from '~/routes'
import NetInfo from "@react-native-community/netinfo";
import {If, MessageTryAgain} from '~/components'
import Home from './Home'
import { IconActions, IconFunds, IconPredictions} from './styles';

const HomeContainer: React.FC = () => {
  const goToActions = () => routing.to(RoutesPublic.ACTIONS)
  const goToFunds = () => routing.to(RoutesPublic.FUNDS)
  const goToPredictions = () => routing.to(RoutesPublic.PREDICTIONS)
  const [connState, setConnState] = useState<boolean | null | undefined>(false);

  const handleIsConnected = () => {
    NetInfo.fetch().then(state => {
      setConnState(state.isInternetReachable);
    });
  }
  
  useEffect(() => {
    handleIsConnected()
  },[NetInfo])
  
  const options = [
    {
      title: 'Ações',
      description: 'Nacionais',
      icon: <IconActions />,
      onPress: goToActions
    },
    {
      title: 'Fundos',
      description: 'De Investimentos',
      icon: <IconFunds />,
      onPress: goToFunds
    },
    {
      title: 'Previdências',
      description: 'Privadas',
      icon: <IconPredictions />,
      onPress: goToPredictions
    }
  ]

  return (
    <>
      <If condition={!connState || false}>
          <MessageTryAgain handleIsConnected={handleIsConnected} />
     </If>

      <If condition={connState || false}>
        <Home options={options} />
      </If>
    </>
  );
};

export default HomeContainer;
