import React, {useState} from 'react';
import {routing} from '~/routes'
import Predictions from './Predictions'

const PredictionsContainer: React.FC = () => {
  const [optionsSearch, setOptionsSearch] = useState({
    active: 'SEM TAXA',
    items: ['SEM TAXA', 'R$ 100,00', 'D+1'],
  });

  const handleOptionSearch = (name: string) => {
    setOptionsSearch({ ...optionsSearch, active: name });
  };

  const goBack = () => routing.goBack()
  return (
    <Predictions goBack={goBack} handleOptionSearch={handleOptionSearch} optionsSearch={optionsSearch} />
  );
};

export default PredictionsContainer;
