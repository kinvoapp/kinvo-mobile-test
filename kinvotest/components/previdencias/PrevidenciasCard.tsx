import React from 'react';
import { FlatListCard } from '../common/FlatListCard';
import { FlatListItemRow } from '../common/FlatListItemRow';
import { PrevidenciasRequestData } from './constants/types';

export const PrevidenciasCard = ({ item }: { item: PrevidenciasRequestData; index: number }) => {
  const { name: title, type: subtitle, minimumValue, tax, redemptionTerm, profitability } = item;

  return (
    <FlatListCard title={title} subtitle={subtitle}>
      <>
        <FlatListItemRow label={'Valor Mínimo'} value={minimumValue} format={'BRL'} />
        <FlatListItemRow label={'Taxa'} value={tax} format={'%'} />
        <FlatListItemRow label={'Resgate'} value={redemptionTerm} format={'D'} />
        <FlatListItemRow label={'Rentabilidade'} value={profitability} format={'profit'} />
      </>
    </FlatListCard>
  );
};
