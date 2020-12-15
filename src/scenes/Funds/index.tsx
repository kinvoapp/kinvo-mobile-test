import React, {useState, useEffect} from 'react';
import {routing} from '~/routes'
import Funds from './Funds'
import {If, MessageTryAgain} from '~/components'
import NetInfo from "@react-native-community/netinfo";

type Data = {
  name: string;
  profitability: string;
  minimumValue: number;
  ticker: number;
}

const FundsContainer: React.FC = () => {
  const [connState, setConnState] = useState<boolean | null | undefined>(false);
  const goBack = () => routing.goBack()
  const [dataActions, setDataActions] = useState<Data[]>();

  async function loadActions(): Promise<Response> {
    const response = await fetch('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds')
    const data = await response.json()
    
    setDataActions(data.data)
    return data
  }

  useEffect(() => {
    loadActions();
  }, []);

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
        <Funds goBack={goBack} dataActions={dataActions}  />
      </If>
    </>
  );
};

export default FundsContainer;
