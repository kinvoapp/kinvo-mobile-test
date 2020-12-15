import React, {useState, useEffect} from 'react';
import {routing} from '~/routes'
import Predictions from './Predictions'
import {If, MessageTryAgain} from '~/components'
import NetInfo from "@react-native-community/netinfo";

const PredictionsContainer: React.FC = () => {
  const [connState, setConnState] = useState<boolean | null | undefined>(false);
  const [optionsSearch, setOptionsSearch] = useState({
    active: 'SEM TAXA',
    items: ['SEM TAXA', 'R$ 100,00', 'D+1'],
  });

  const handleIsConnected = () => {
    NetInfo.fetch().then(state => {
      setConnState(state.isInternetReachable);
    });
  }
  
  useEffect(() => {
    handleIsConnected()
  },[NetInfo])

  const handleOptionSearch = (name: string) => {
    setOptionsSearch({ ...optionsSearch, active: name });
  };

  const goBack = () => routing.goBack()
  return (
    <>
      <If condition={!connState || false}>
        <MessageTryAgain handleIsConnected={handleIsConnected} />
      </If>

      <If condition={connState || false}>
        <Predictions goBack={goBack} handleOptionSearch={handleOptionSearch} optionsSearch={optionsSearch} />
      </If>
    </>
  );
};

export default PredictionsContainer;
