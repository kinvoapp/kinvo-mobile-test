import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import StocksList from '../../components/StocksList';

const Stocks: React.FC = () => {
  return (
    <>
      <Header title="Ações" thereIsAButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <StocksList />
      </ScrollView>
    </>
  );
};

export default Stocks;
