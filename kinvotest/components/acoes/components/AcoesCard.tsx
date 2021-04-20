import React from 'react';
import { FlatListCard } from '../../common/FlatListCard';
import { FlatListItemRow } from '../../common/FlatListItemRow';
import { AcoesRequestData } from '../constants/types';

export const AcoesCard = ({ item, onPress }: { item: AcoesRequestData; index: number; liked?: boolean }) => {
  const { id, name: title, ticker: subtitle, minimumValue, profitability, favorite } = item;

  return (
    <FlatListCard title={title} subtitle={subtitle} showFav={true} favorite={favorite} onPress={onPress}>
      <>
        <FlatListItemRow label={'Valor Mínimo'} value={minimumValue} format={'BRL'} />
        <FlatListItemRow label={'Rentabilidade'} value={profitability} format={'profit'} />
      </>
    </FlatListCard>
  );
};
