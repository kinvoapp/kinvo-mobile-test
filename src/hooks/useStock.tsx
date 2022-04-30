import { useContext } from 'react';
import { StockContext } from '~/contexts/StockContext';

const useStock = () => {
  const context = useContext(StockContext);

  if (context) {
    return context;
  }

  throw new Error('Stock provider must be setter.');
};

export default useStock;
