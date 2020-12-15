import React, {useState, useEffect} from 'react';
import {routing} from '~/routes'
import {If, MessageTryAgain} from '~/components'
import Actions from './Actions'
import NetInfo from "@react-native-community/netinfo";


const ActionsContainer: React.FC = () => {
  const [iconHeartState, setIconHeartState] = useState(false)
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


  const handleIconHeartState = () => {
    setIconHeartState(!iconHeartState)
  }

  return (
    <>
    <If condition={!connState || false}>
        <MessageTryAgain handleIsConnected={handleIsConnected} />
   </If>

    <If condition={connState || false}>
      <Actions goBack={goBack} handleIconHeartState={handleIconHeartState} />
    </If>
    </>
  );
};

export default ActionsContainer;
