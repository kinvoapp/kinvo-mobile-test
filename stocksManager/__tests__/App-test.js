/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Dashboard from '../src/pages/dashboard';
 import Stocks from '../src/pages/stocks';
 import Funds from '../src/pages/funds';
 import Pensions from '../src/pages/pensions';
 import { createStore, applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';
 import { Provider } from 'react-redux';
 import reducer from '../src/reducers';
 import {getStocks, getStocksSuccess} from '../src/actions/stocks';
 import {getFunds, getFundsSuccess} from '../src/actions/funds';
 import {getPensions, getPensionsSuccess} from '../src/actions/pensions';
 
 // Note: test renderer must be required after react-native.
 import renderer, { create, act } from 'react-test-renderer';
 
 jest.useFakeTimers();


 //Mocks
 jest.mock('@react-navigation/core')

 jest.mock('@react-native-community/async-storage', () => {
  return {
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args,
  };
});

 
 jest.mock('react-navigation', () => ({
   withNavigation: (Component) => (props) => (
     <Component navigation={{ navigate: jest.fn() }} {...props} />
   ),
 }))

 jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}))
 
 const store = createStore(reducer, applyMiddleware(thunk))
 
 
 /* DASHBOARD PAGE */
 const dashboard = create(
 <Provider store={store}>
   <Dashboard />
 </Provider>);
 
 it('dashboard renders correctly', () => {
   expect(dashboard).toMatchSnapshot();
 });
 
 /* STOCKS PAGE */
 const stocks = create(
   <Provider store={store}>
     <Stocks />
   </Provider>);
  it('Get stocks', () => {
    expect(getStocks()).toBeDefined();
    expect(getStocksSuccess({})).toBeDefined();
  })
 
 it('stocks renders correctly', () => {
   expect(stocks).toMatchSnapshot();
 });


  /* FUNDS PAGE */
  const funds = create(
    <Provider store={store}>
      <Funds />
    </Provider>);
   it('Get funds', () => {
     expect(getFunds()).toBeDefined();
     expect(getFundsSuccess({})).toBeDefined();
   })
  
  it('funds renders correctly', () => {
    expect(funds).toMatchSnapshot();
  });


  /* PENSIONS PAGE */
  const pensions = create(
    <Provider store={store}>
      <Pensions />
    </Provider>);
    it('Get pensions', () => {
      expect(getPensions()).toBeDefined();
      expect(getPensionsSuccess({})).toBeDefined();
    })
  
  it('pensions renders correctly', () => {
    expect(pensions).toMatchSnapshot();
  });