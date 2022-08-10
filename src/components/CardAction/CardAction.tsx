import React from 'react';
import { DivisorInLine } from '../DivisorInLine/DivisorInLine';

import * as Component from './CardAction.styles';

export type CardActionProps = { children: string };

export function CardAction({ children }: CardActionProps) {
  return (
    <Component.Container>
      {children}
      <DivisorInLine isPadding="default" />
    </Component.Container>
  );
}
