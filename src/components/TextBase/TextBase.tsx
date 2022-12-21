import React from 'react';
import { Text, TextProps } from 'react-native';

import * as Component from './TextBase.styles';

type TextColor = 'primary' | 'secondary' | 'default' | 'white';

type Size = 'small' | 'default' | 'large' | 'largeExtra' | 'largeSuper';

type TextWeight = 'Light' | 'Medium' | 'Bold' | 'SemiBold';

export interface TextBaseProps extends TextProps {
  children: React.ReactElement<typeof Text> | string;
  weight: TextWeight;
  font: TextWeight;
  size?: Size;
  color?: TextColor;
}

export function TextBase({
  children,
  color = 'primary',
  font = 'Medium',
  weight = 'Medium',
  ...rest
}: TextBaseProps) {
  return (
    <Component.Container font={font} weight={weight} color={color} {...rest}>
      {children}
    </Component.Container>
  );
}
