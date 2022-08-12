import React from 'react';
import { TextBase } from '../TextBase/TextBase';

import * as Component from './Slogan.styles';

export function Slogan() {
  return (
    <Component.Container>
      <TextBase weight="Light" font="Light" color="white">
        Novo
      </TextBase>
    </Component.Container>
  );
}
