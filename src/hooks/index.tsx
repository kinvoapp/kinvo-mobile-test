import React from 'react';

import {AcoesProvider} from './acoes';
import {FundosProvider} from './fundos';
import {PrevidenciasProvider} from './previdencias';

const AppProvider: React.FC = ({children}) => (
  <AcoesProvider>
    <FundosProvider>
      <PrevidenciasProvider>{children}</PrevidenciasProvider>
    </FundosProvider>
  </AcoesProvider>
);

export default AppProvider;
