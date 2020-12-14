import React, {createContext, useCallback, useState, useContext} from 'react';
import api from '../services/api';

interface AcoesContextData {
  loading: boolean;
  stocks: Array<object>;
  getStocks: Function;
}

const AcoesContext = createContext<AcoesContextData>({} as AcoesContextData);

const AcoesProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);

  const getStocks = useCallback(async () => {
    setLoading(true);

    const response = await api.get('stocks');

    setStocks(response.data.data);

    setLoading(false);
  }, []);

  return (
    <AcoesContext.Provider value={{loading, stocks, getStocks}}>
      {children}
    </AcoesContext.Provider>
  );
};

function useAcoes(): AcoesContextData {
  const context = useContext(AcoesContext);

  return context;
}

export {AcoesProvider, useAcoes};
