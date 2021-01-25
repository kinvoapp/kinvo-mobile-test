import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import PrivatePensionList from '../../components/PrivatePensionList';

const PrivatePension: React.FC = () => {
  return (
    <>
      <Header title="Previdências" thereIsAButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <PrivatePensionList />
      </ScrollView>
    </>
  );
};

export default PrivatePension;
