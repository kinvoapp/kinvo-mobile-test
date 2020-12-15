import React, {useState} from 'react';
import {RoutesPublic, routing} from '~/routes'
import Actions from './Actions'

const ActionsContainer: React.FC = () => {
  const [iconHeartState, setIconHeartState] = useState(false)

  const goBack = () => routing.goBack()

  const handleIconHeartState = () => {
    setIconHeartState(!iconHeartState)
  }
  return (
    <Actions goBack={goBack} handleIconHeartState={handleIconHeartState} />
  );
};

export default ActionsContainer;
