import React, {createContext, useCallback, useState, useContext} from 'react';
import api from '../services/api';

interface PrevidenciasContextData {
  loading: boolean;
  pensions: Array<object>;
  getPensions: Function;
}

const PrevidenciasContext = createContext<PrevidenciasContextData>(
  {} as PrevidenciasContextData,
);

const PrevidenciasProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [pensions, setPensions] = useState([]);

  const getPensions = useCallback(async () => {
    setLoading(true);

    const response = await api.get('pension');

    setPensions(response.data.data);

    setLoading(false);
  }, []);

  return (
    <PrevidenciasContext.Provider value={{loading, pensions, getPensions}}>
      {children}
    </PrevidenciasContext.Provider>
  );
};

function usePrevidencias(): PrevidenciasContextData {
  const context = useContext(PrevidenciasContext);

  return context;
}

export {PrevidenciasProvider, usePrevidencias};
