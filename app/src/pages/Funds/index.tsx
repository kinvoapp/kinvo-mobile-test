import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import FundsList from '../../components/FundsList';

const Funds: React.FC = () => {
  return (
    <>
      <Header title="Fundos" thereIsAButton />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <FundsList />
      </ScrollView>
    </>
  );
};

export default Funds;
