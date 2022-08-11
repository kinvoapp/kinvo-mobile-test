import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextBase } from '../TextBase/TextBase';

import * as Component from './Header.styles';
import { IconArrowLeft } from '~assets/icons';

export type HeaderProps = {
  title: string;
  hasArrowLeft: boolean;
};

export function Header({ title, hasArrowLeft }: HeaderProps) {
  const navigation = useNavigation();

  function handlerGoBack() {
    navigation.goBack();
  }

  return (
    <Component.Container>
      {hasArrowLeft ? (
        <Component.ButtonGoBack onPress={handlerGoBack}>
          <IconArrowLeft />
        </Component.ButtonGoBack>
      ) : null}

      <TextBase weight="Bold" font="Medium" size="large">
        {title}
      </TextBase>
    </Component.Container>
  );
}
