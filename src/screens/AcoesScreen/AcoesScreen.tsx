import React from 'react';
import { CardAction, Header } from '~components';

import * as Component from './AcoesScreen.styles';

export type AcoesScreenProps = { children: string };

export function AcoesScreen({ }: AcoesScreenProps) {
  return (
    <>
      <Header title="Ações" hasArrowLeft />

      <Component.Container>
        <CardAction code="MGLU3" title="Magazine Luiza" />
      </Component.Container>
    </>
  );
}
