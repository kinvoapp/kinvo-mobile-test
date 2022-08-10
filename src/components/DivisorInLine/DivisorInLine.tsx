import React from 'react';
import { ViewProps } from 'react-native';

import * as Component from './DivisorInLine.styles';

export interface DivisorInLineProps extends ViewProps {
  isPadding: 'default';
}

export function DivisorInLine({
  isPadding = 'default',
  ...rest
}: DivisorInLineProps) {
  return (
    <Component.Container isPadding={isPadding}>
      <Component.Line {...rest} />
    </Component.Container>
  );
}
