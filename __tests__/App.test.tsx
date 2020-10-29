import React from 'react';
import renderer from 'react-test-renderer';
import NavigationBar from '../src/components/NavigationBar';
import Header from '../src/screens/Wallet/components/Header';
import LoadingIndicator from '../src/screens/Wallet/components/Header';
import ProductsList from '../src/screens/Wallet/components/Header';

it('ProductsList Rendered', () => {
  renderer.create(<ProductsList />);
});

it('NavigationBar Rendered', () => {
  renderer.create(<NavigationBar />);
});

it('Header Rendered', () => {
  renderer.create(<Header />);
});

it('LoadingIndicator Rendered', () => {
  renderer.create(<LoadingIndicator />);
});