import React, { createContext, useCallback, useMemo, useState } from 'react';
import getPensions from '~/useCases/GetPensions';
import { ReactNodeProps } from '~/types/reactNode';

interface PensionProps {
  pensions: Pension[];
  isLoading: boolean;
  hasError: boolean;
  loadPensions: () => void;
}

export const PensionContext = createContext({} as PensionProps);

const PensionProvider: React.FC<ReactNodeProps> = ({ children }) => {
  const [pensions, setPensions] = useState<Pension[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const orderPensions = useCallback((pensionsList: Pension[]) => {
    return pensionsList.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const loadPensions = useCallback(async () => {
    try {
      setIsLoading(true);

      const pensionsList = orderPensions(await getPensions());

      setHasError(false);
      setPensions(pensionsList);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      pensions,
      isLoading,
      hasError,
      loadPensions,
    }),
    [hasError, isLoading, loadPensions, pensions],
  );

  return (
    <PensionContext.Provider value={value}>{children}</PensionContext.Provider>
  );
};

export default PensionProvider;
