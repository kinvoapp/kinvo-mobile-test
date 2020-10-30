import React from 'react'
import { useSelector } from 'react-redux';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Search from './components/Search';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import { State } from '../../store';

export default function Wallet() {
  const loadingData = useSelector<State, boolean>(state => state.loading.data);
  const errorData = useSelector<State, boolean>(state => state.err.data);

  
 
  return ( 
  <>
    <Header/>
    <Search/>
    {loadingData ?  <LoadingIndicator/> : errorData ? <ErrorMessage/> : <ProductsList/>}
   </>
  );  
};
