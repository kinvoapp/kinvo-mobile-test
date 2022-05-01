import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import getFunds from '~/useCases/GetFunds';
import { sortListByName } from '~/utils';
import { ReactNodeProps } from '~/types/reactNode';

interface FundProps {
  funds: Fund[];
  isLoading: boolean;
  hasError: boolean;
  hasNewFunds: boolean;
  loadFunds: () => void;
}

export const FundContext = createContext({} as FundProps);

const FundProvider: React.FC<ReactNodeProps> = ({ children }) => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasNewFunds, setHasNewFunds] = useState(false);

  const loadFunds = useCallback(async () => {
    try {
      setIsLoading(true);

      const fundsList = sortListByName(await getFunds()) as Fund[];

      setHasNewFunds(fundsList.some(({ status }) => status === 1));
      setHasError(false);
      setFunds(fundsList);
    } catch (e) {
      setHasNewFunds(false);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    async function loadFundsFirstRender() {
      await loadFunds();
    }

    loadFundsFirstRender();
  }, []);

  const value = useMemo(
    () => ({
      funds,
      isLoading,
      hasError,
      hasNewFunds,
      loadFunds,
    }),
    [funds, hasError, hasNewFunds, isLoading, loadFunds],
  );

  return <FundContext.Provider value={value}>{children}</FundContext.Provider>;
};

export default FundProvider;
