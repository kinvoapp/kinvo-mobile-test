import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Component from './CardBase.styles';

export type CardBaseProps = {
  children: React.ReactNode;
} & TouchableOpacityProps;

export function CardBase({ children, ...rest }: CardBaseProps) {
  return <Component.Container {...rest}>{children}</Component.Container>;
}
