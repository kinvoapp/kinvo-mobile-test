import React from 'react';
import {
  ErrorMessage,
  ReloadButton,
  ReloadButtonText,
  ResultNotFound,
  ErrorText,
} from './styles';

interface ConectionErrorProps {
  reloadPage: () => void;
  title: string;
}

export function ConectionError({title, reloadPage}: ConectionErrorProps) {
  return (
    <ResultNotFound>
      <ErrorText>Ocorreu um erro.</ErrorText>
      <ErrorMessage>Não foi possível se conectar ao banco</ErrorMessage>
      <ErrorMessage>{`de ${title}`}</ErrorMessage>
      <ReloadButton activeOpacity={0.8} onPress={reloadPage}>
        <ReloadButtonText>TENTAR NOVAMENTE</ReloadButtonText>
      </ReloadButton>
    </ResultNotFound>
  );
}
