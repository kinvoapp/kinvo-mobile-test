import React from 'react';
import Produtos from './Tab/Pages/Produtos';
import Carteira from './Tab/Pages/Carteira';
import Extrato from './Tab/Pages/Extrato';

export default [{
  id: 0,
  page: <Carteira />,
  title: 'Carteira',
},
{
  id: 1,
  page: <Produtos />,
  title: 'Produtos',
},
{
  id: 2,
  page: <Extrato />,
  title: 'Extrato',
}];
