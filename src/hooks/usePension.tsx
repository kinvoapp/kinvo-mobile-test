import { useContext } from 'react';
import { PensionContext } from '~/contexts/PensionContext';

const usePension = () => {
  const context = useContext(PensionContext);

  if (context) {
    return context;
  }

  throw new Error('Pension provider must be setter');
};

export default usePension;
