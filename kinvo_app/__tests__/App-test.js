/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Carteira from '../src/Tab/Pages/Carteira';
import Extrato from '../src/Tab/Pages/Extrato';
import Produtos from '../src/Tab/Pages/Produtos';
import ListItem from '../src/Components/ListItem';
import SearchBar from '../src/Components/SearchBar';
import BottomIcon from '../src/Components/BottomIcon';

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
