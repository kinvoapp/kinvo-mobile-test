import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import CardStocks from '../../components/CardStocks';

const Stocks: React.FC = () => {
  return (
    <>
      <Header title="Ações" thereIsAButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <CardStocks />
      </ScrollView>
    </>
  );
};

export default Stocks;
