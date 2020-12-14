import React, {createContext, useCallback, useState, useContext} from 'react';
import api from '../services/api';

interface FundosContextData {
  loading: boolean;
  funds: Array<object>;
  getFunds: Function;
}

const FundosContext = createContext<FundosContextData>({} as FundosContextData);

const FundosProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [funds, setFunds] = useState([]);

  const getFunds = useCallback(async () => {
    setLoading(true);

    const response = await api.get('funds');

    setFunds(response.data.data);

    setLoading(false);
  }, []);

  return (
    <FundosContext.Provider value={{loading, funds, getFunds}}>
      {children}
    </FundosContext.Provider>
  );
};

function useFundos(): FundosContextData {
  const context = useContext(FundosContext);

  return context;
}

export {FundosProvider, useFundos};
