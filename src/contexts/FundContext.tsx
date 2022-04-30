import React, { createContext, useCallback, useMemo, useState } from 'react';
import getFunds from '~/useCases/GetFunds';
import { sortListByName } from '~/utils';
import { ReactNodeProps } from '~/types/reactNode';

interface FundProps {
  funds: Fund[];
  isLoading: boolean;
  hasError: boolean;
  loadFunds: () => void;
}

export const FundContext = createContext({} as FundProps);

const FundProvider: React.FC<ReactNodeProps> = ({ children }) => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadFunds = useCallback(async () => {
    try {
      setIsLoading(true);

      const fundsList = sortListByName(await getFunds()) as Fund[];

      setHasError(false);
      setFunds(fundsList);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      funds,
      isLoading,
      hasError,
      loadFunds,
    }),
    [funds, hasError, isLoading, loadFunds],
  );

  return <FundContext.Provider value={value}>{children}</FundContext.Provider>;
};

export default FundProvider;
