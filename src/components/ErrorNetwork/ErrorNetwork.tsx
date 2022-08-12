import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonSimple } from '../ButtonSimple/ButtonSimple';
import { TextBase } from '../TextBase/TextBase';

import * as Component from './ErrorNetwork.styles';

export type ErrorNetworkProps = {
  onTryAgain: () => void;
  slog: 'fundos' | 'ações' | 'previdências';
};

export function ErrorNetwork({ onTryAgain, slog }: ErrorNetworkProps) {
  return (
    <Component.Container>
      <TextBase
        weight="Bold"
        font="Medium"
        size="default"
        color="default"
        style={styles.title}>
        Ocorreu um erro.
      </TextBase>
      <TextBase
        weight="Light"
        font="Light"
        size="small"
        color="default"
        style={styles.description}>
        <>
          Não foi possível se conectar ao banco{'\n'}de {slog}.
        </>
      </TextBase>

      <ButtonSimple typeButton="primary" onPress={onTryAgain}>
        TENTAR NOVAMENTE
      </ButtonSimple>
    </Component.Container>
  );
}

const styles = StyleSheet.create({
  title: { textAlign: 'center', marginBottom: 12 },
  description: { textAlign: 'center', marginBottom: 20 },
});
