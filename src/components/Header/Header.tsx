import React from 'react';
import { TextBase } from '../TextBase/TextBase';

import * as Component from './Header.styles';

export type HeaderProps = {
  children: string;
};

export function Header({ children }: HeaderProps) {
  return (
    <Component.Container>
      <TextBase weight="Bold" font="Medium" size="large">
        {children}
      </TextBase>
    </Component.Container>
  );
}
