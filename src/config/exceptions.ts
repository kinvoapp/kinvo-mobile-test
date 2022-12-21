export class NoNetworkError extends Error {
  name = 'NoNetworkError';
  message = 'Falha de conexão';
}

export class NoAbortCanceled extends Error {
  name = 'NoAbortCanceled';
  message = 'Requisição cancelada';
}
