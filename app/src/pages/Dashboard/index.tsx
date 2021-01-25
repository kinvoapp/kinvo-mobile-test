import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import stocksImg from '../../assets/stocks.png';
import fundsImg from '../../assets/funds.png';
import privatePensionImg from '../../assets/privatePension.png';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header title="Desafio" />

      <Card
        sourceImage={stocksImg}
        title="Ações"
        description="Nacionais"
        navigateTo="Stocks"
      />

      <Card
        sourceImage={fundsImg}
        title="Fundos"
        description="De investimentos"
        alertNew
        navigateTo="Funds"
      />

      <Card
        sourceImage={privatePensionImg}
        title="Previdências"
        description="Privadas"
        navigateTo="PrivatePension"
      />
    </>
  );
};

export default Dashboard;
