import React, {ReactNode} from 'react';
import numeral from 'numeral';

interface UINumberProps {
  format: string;
  children: ReactNode;
}

export function UINumber({format, children}: UINumberProps) {
  return <Text>{numeral(children).format(format)}</Text>;
}
