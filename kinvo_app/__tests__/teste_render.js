/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Carteira from '../src/Tab/Pages/Carteira';
import Extrato from '../src/Tab/Pages/Extrato';
import Produtos from '../src/Tab/Pages/Produtos';

import Pages from '../src/Tab/Pages';
import Premium from '../src/Tab/Premium';
import Conta from '../src/Tab/Conta';
import Resumo from '../src/Tab/Resumo';

import ListItem from '../src/Components/ListItem';
import SearchBar from '../src/Components/SearchBar';
import InputModal from '../src/Components/InputModal';
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
it('Pages Rendered', () => {
  renderer.create(<Pages />);
});
it('ListItem Rendered', () => {
  renderer.create(<ListItem />);
});
it('Conta Rendered', () => {
  renderer.create(<Conta />);
});
it('SearchBar Rendered', () => {
  renderer.create(<SearchBar />);
});
it('InputModal Rendered', () => {
  renderer.create(<InputModal />);
});
it('BottomIcon Rendered', () => {
  renderer.create(<BottomIcon />);
});
it('Pages Rendered', () => {
  renderer.create(<Pages />);
});
it('Premium Rendered', () => {
  renderer.create(<Premium />);
});
it('Resumo Rendered', () => {
  renderer.create(<Resumo />);
});
