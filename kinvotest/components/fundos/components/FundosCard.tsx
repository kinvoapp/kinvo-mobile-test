import React from 'react';
import { FlatListCard } from '../../common/FlatListCard';
import { FlatListItemRow } from '../../common/FlatListItemRow';
import { FundosRequestData } from '../constants/types';

const getStatus = (status: number) => {
  switch (status) {
    case 0:
      return 'Comum';
    case 1:
      return 'Novo';
    case 2:
      return 'Fechado';
  }
};

export const FundosCard = ({ item }: { item: FundosRequestData; index: number }) => {
  const { name: title, type: subtitle, minimumValue, profitability, rating, status } = item;
  const statusName = getStatus(status);

  return (
    <FlatListCard title={title} subtitle={subtitle} badge={statusName}>
      <>
        <FlatListItemRow label={'Classificação'} value={rating} format={'rating'} />
        <FlatListItemRow label={'Valor Mínimo'} value={minimumValue} format={'BRL'} />
        <FlatListItemRow label={'Rentabilidade'} value={profitability} format={'profit'} />
      </>
    </FlatListCard>
  );
};
