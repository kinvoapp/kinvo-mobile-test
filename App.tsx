import React from 'react';
import Contexts from '~/contexts';
import Navigation from '~/navigations';

function App() {
  return (
    <Contexts>
      <Navigation />
    </Contexts>
  );
}

export default App;
