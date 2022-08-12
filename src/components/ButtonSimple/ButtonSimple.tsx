import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { RenderCondition } from '../RenderCondition/RenderCondition';
import { TextBase } from '../TextBase/TextBase';

import * as Component from './ButtonSimple.styles';

export type ButtonSimpleProps = {
  children: string;
  typeButton?: 'primary' | 'secondary';
  size?: 'default' | 'small' | 'smallLarge';
} & TouchableOpacityProps;

export function ButtonSimple({
  children,
  typeButton = 'primary',
  size = 'default',
  ...rest
}: ButtonSimpleProps) {
  return (
    <Component.Container typeButton={typeButton} size={size} {...rest}>
      <RenderCondition condition={typeButton === 'primary'}>
        <TextBase
          weight="Medium"
          font="Light"
          size="small"
          color="white"
          style={styles.label}>
          {children}
        </TextBase>
      </RenderCondition>
      <RenderCondition condition={typeButton === 'secondary'}>
        <TextBase
          weight="Bold"
          font="Light"
          size="small"
          color="default"
          style={styles.label}>
          {children}
        </TextBase>
      </RenderCondition>
    </Component.Container>
  );
}

const styles = StyleSheet.create({
  label: { textAlign: 'center' },
});
