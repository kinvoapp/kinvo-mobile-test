import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Products from '../src/screens/Products'

it('Products Rendered', () => {
  renderer.create(<Products />);
});

it('Footer Rendered', () => {
  renderer.create(<Footer />);
});

it('Header Rendered', () => {
  renderer.create(<Header />);
});