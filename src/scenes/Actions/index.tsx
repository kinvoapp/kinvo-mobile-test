import React, {useState, useEffect} from 'react';
import {routing} from '~/routes'
import {If, MessageTryAgain} from '~/components'
import Actions from './Actions'
import NetInfo from "@react-native-community/netinfo";

type Data = {
  name: string;
  profitability: string;
  minimumValue: number;
  ticker: number;
}

const ActionsContainer: React.FC = () => {
  const [connState, setConnState] = useState<boolean | null | undefined>(false);
  const [dataActions, setDataActions] = useState<Data[]>();

  async function loadActions(): Promise<Response> {
    const response = await fetch('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks')
    const data = await response.json()
    
    setDataActions(data.data)
    return data
  }

  useEffect(() => {
    loadActions();
  }, []);

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
      <Actions 
        goBack={goBack} 
        dataActions={dataActions} 
      />
    </If>
    </>
  );
};

export default ActionsContainer;
