import React, {useState, useEffect} from 'react';
import {routing} from '~/routes'
import Funds from './Funds'
import {If, MessageTryAgain} from '~/components'
import NetInfo from "@react-native-community/netinfo";

const FundsContainer: React.FC = () => {
  const [connState, setConnState] = useState<boolean | null | undefined>(false);
  const goBack = () => routing.goBack()

  const handleIsConnected = () => {
    NetInfo.fetch().then(state => {
      setConnState(state.isInternetReachable);
    });
  }
  
  useEffect(() => {
    handleIsConnected()
  },[NetInfo])

  return (
    <>
      <If condition={!connState || false}>
        <MessageTryAgain handleIsConnected={handleIsConnected} />
      </If>

      <If condition={connState || false}>
        <Funds goBack={goBack} />
      </If>
    </>
  );
};

export default FundsContainer;
