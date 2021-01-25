# Kinvo Mobile Teste Técnico

<span>
  Este projeto foi realizado para o
  teste técnico da Kinvo.
</span>

## Desenvolvimento
<span>
  Construído utilizando React Native com o superset TypeScript.
</span>

## Setup para rodar o projeto
Você primeiro deve rodar o comando `yarn`,
o comando serve para instalar as dependências do projeto, como bibliotecas
instaladas no `package.json` e também com biblitoecas vindas do React Native.
Após rodar o comando, pode ser executado o comando `yarn start`, o comando serve para começar a aplicação React Native e depois executar o comando
`yarn android` que serve para executar o projeto no emulador.

# Funções executadas
Desenvolver 4 telas, a Dashboard, Ações Nacionais, Fundos de Investimentos e
Previdências privadas.

## Tela Inicial
* Conter a lista que o usuário pode navegar. ✔️

## Tela de Ações
* A lista de ações deve ser carregada através de uma chamada API. ✔️
* A lista de ações deve obedecer a seguinte ordem:
  * Favoritadas deve aparecer primeiro. ✔️
  * Ordem alfabética. ✔️
* O usuário pode favoritar/desfavoritar uma "ação" tocando no ícone do coração(o coração preenchido indica favoritado e o coração vazado indica desfavoritado). ✔️
* A lista de "ações" inicia com todos as "ações" desfavoritadas. ✔️

## Tela de Fundos
* A lista de "fundos" deve ser carregada através de uma chamada a api. ✔️
* A lista de "fundos" deve estar em ordem alfabética. ✔️
* Os estados do fundo são:
  * 0: Comum ✔️
  * 1: Novo ✔️
  * 2: Fechado ✔️
* Um "fundo" com o estado de "comum" deve apresentar o layout básico conforme layout. ✔️
* Um "fundo" com o estado de "novo" deve apresentar o layout básico com a adição do label "novo" conforme layout. ✔️
* Um "fundo" com o estado de "fechado" tem um layout particular alem do label "fechado" conforme layout. ✔️

## Tela de Pervidências
* A lista de "previdências" deve ser carregada através de uma chamada a api. ✔️
* A lista de "previdências" deve estar em ordem alfabética. ✔️
* A tela contem um filtro de múltipla escolha que atua sobre a lista de "previdências". Quando selecionado os filtros:
  * "SEM TAXA": inclui as previdências com taxa igual a zero. ✔️
  * "R$100,00": inclui as previdências com valor mínimo igual a cem reais. ✔️
  * "D+1": inclui as previdências com resgate igual a um. ✔️

## O que não foi realizado
* Um problema de encontrar a solução e não encontrado foi:
  * Quando a internet estiver desligada, e voltar ao normal, clicar no botão de tentar novamente para fazer o reload.
