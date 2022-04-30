import { useContext } from 'react';
import { FundContext } from '~/contexts/FundContext';

const useFund = () => {
  const context = useContext(FundContext);

  if (context) {
    return context;
  }

  throw new Error('Fund provider must be setter');
};

export default useFund;
