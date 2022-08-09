
import { Routes } from './src/routes';

import { Main } from './src/styles/global.styles';

import light from './src/theme/light';

export default function App() {
  return (
    <Main theme={light}>
      <Routes />
    </Main>
  );
}


