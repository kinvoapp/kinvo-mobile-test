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
  const isDisabled = statusName === 'Fechado';

  return (
    <FlatListCard title={title} subtitle={subtitle} badge={statusName} disabled={isDisabled}>
      <>
        <FlatListItemRow label={'Classificação'} value={rating} format={'rating'} disabled={isDisabled} />
        <FlatListItemRow label={'Valor Mínimo'} value={minimumValue} format={'BRL'} disabled={isDisabled} />
        <FlatListItemRow label={'Rentabilidade'} value={profitability} format={'profit'} disabled={isDisabled} />
      </>
    </FlatListCard>
  );
};
