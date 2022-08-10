import React from 'react';

import * as Component from './AcoesScreen.styles';

export type AcoesScreenProps = { children: string };

export function AcoesScreen({ children }: AcoesScreenProps) {
  return <Component.Container>{children}</Component.Container>;
}
