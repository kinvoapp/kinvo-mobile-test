import React from 'react';
import {RoutesPublic, routing} from '~/routes'
import { Wrapper } from './styles';
import Home from './Home'
import ActionIcon from '~/assets/actions.png'
import FundsIcon from '~/assets/funds.png'
import PredictionsIcon from '~/assets/predictions.png'

const HomeContainer: React.FC = () => {
  const goToActions = () => routing.to(RoutesPublic.ACTIONS)
  const goToFunds = () => routing.to(RoutesPublic.FUNDS)
  const goToPredictions = () => routing.to(RoutesPublic.PREDICTIONS)
  
  const options = [
    {
      title: 'Ações',
      description: 'Nacionais',
      icon: <ActionIcon />,
      onPress: goToActions
    },
    {
      title: 'Fundos',
      description: 'De Investimentos',
      icon: <ActionIcon />,
      onPress: goToFunds
    },
    {
      title: 'Previdências',
      description: 'Privadas',
      icon: <ActionIcon />,
      onPress: goToPredictions
    }
  ]
  return (
    <Home options={options} />
  );
};

export default HomeContainer;
