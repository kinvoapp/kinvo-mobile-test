/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Carteira from '../src/Pages/Carteira';
import Extrato from '../src/Pages/Extrato';
import Produtos from '../src/Pages/Produtos';
import ListItem from '../src/Components/ListItem';
import SearchBar from '../src/Components/SearchBar';
// Note: test renderer must be required after react-native.

it('Carteira Rendered', () => {
  renderer.create(<Carteira />);
});
it('Extrato Rendered', () => {
  renderer.create(<Extrato />);
});
it('Produtos Rendered', () => {
  renderer.create(<Produtos />);
});
it('ListItem Rendered', () => {
  renderer.create(<ListItem />);
});
it('SearchBar Rendered', () => {
  renderer.create(<SearchBar />);
});
