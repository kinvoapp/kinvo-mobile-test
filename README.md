
# React Native Code Challenge

_An app that showcase the best brazilian stocks, funds and pensions for you. Made with React Native._


## Como rodar o projeto:

Para clonar e rodar este projeto, você vai precisar de Git, Node.js and NPM instalados no seu computador. Da sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/westgoten/kinvo-mobile-test.git

# Acesse a pasta do repositório
$ cd kinvo-mobile-test

# Instale as dependências
$ npm install

# Inicie o Metro bundler
$ npm react-native start

# Rode o app (iOS)
$ npm react-native run-ios

# Rode o app (Android)
$ npm react-native run-android
```

## Requisitos:

### Tela "Desafio" (Tela inicial)

- A tela inicial contem uma lista que permite o usuário navegar para as três telas: Ações, Fundos e Previdências. (FEITO)

### Tela "Ações"

- A lista de "ações" deve ser carregada através de uma chamada a api. (FEITO)
  - Api: https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks
- A lista de "ações" deve obedecer a seguinte prioridade: (FEITO)
   - Favoritadas deve aparecer primeiro
   - Ordem alfabética
- O usuário pode favoritar/desfavoritar uma "ação" tocando no ícone do coração(o coração preenchido indica favoritado e o coração vazado indica desfavoritado). (FEITO)
- A lista de "ações" inicia com todos as "ações" desfavoritadas. (FEITO)

### Tela "Fundos"

- A lista de "fundos" deve ser carregada através de uma chamada a api. (FEITO)
  - Api: https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds
- A lista de "fundos" deve estar em ordem alfabética. (FEITO)
- Os estados do fundo são:
  - 0: Comum
  - 1: Novo
  - 2: Fechado
- Um "fundo" com o estado de "comum" deve apresentar o layout básico conforme layout. (FEITO)
- Um "fundo" com o estado de "novo" deve apresentar o layout básico com a adição do label "novo" conforme layout. (FEITO)
- Um "fundo" com o estado de "fechado" tem um layout particular alem do label "fechado" conforme layout. (FEITO)

### Tela "Previdências"

- A lista de "previdências" deve ser carregada através de uma chamada a api. (FEITO)
  - Api: https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/pension
- A lista de "previdências" deve estar em ordem alfabética. (FEITO)
- A tela contem um filtro de múltipla escolha que atua sobre a lista de "previdências". Quando selecionado os filtros:
   - "SEM TAXA": inclui as previdências com taxa igual a zero. (FEITO)
   - "R$100,00": inclui as previdências com valor mínimo igual a cem reais. (FEITO)
   - "D+1": inclui as previdências com resgate igual a um. (FEITO)

## License

Read about license rights and limitations [here](LICENSE).
