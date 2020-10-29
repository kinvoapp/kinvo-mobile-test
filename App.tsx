import React, { useEffect } from 'react';
import Routes from './src/routes';
import Header from './src/components/Header';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {

  return (

    <Provider store={store}>
      <Header/>
      <Routes/>
    </Provider>
   
  );
}


