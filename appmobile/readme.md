<h1 align="left">
<br>
 React Native Code Challenge - KINVO
</h1>

### Sobre o desafio

O desafio consiste em desenvolver um aplicativo de 4 telas com as seguintes funcionalidades logo abaixo:

### Tela "Desafio" (Tela inicial)

- A tela inicial contem uma lista que permite o usuário navegar para as três telas: Ações, Fundos e Previdências.

### Tela "Ações"

- A lista de "ações" deve ser carregada através de uma chamada a api.
- A lista de "ações" deve obedecer a seguinte prioridade:
  - Favoritadas deve aparecer primeiro
  - Ordem alfabética
- O usuário pode favoritar/desfavoritar uma "ação" tocando no ícone do coração(o coração preenchido indica favoritado e o coração vazado indica desfavoritado).
- A lista de "ações" inicia com todos as "ações" desfavoritadas.

### Tela "Fundos"

- A lista de "fundos" deve ser carregada através de uma chamada a api.
- A lista de "fundos" deve estar em ordem alfabética.
- Os estados do fundo são:
  - 0: Comum
  - 1: Novo
  - 2: Fechado
- Um "fundo" com o estado de "comum" deve apresentar o layout básico conforme layout.
- Um "fundo" com o estado de "novo" deve apresentar o layout básico com a adição do label "novo" conforme layout.
- Um "fundo" com o estado de "fechado" tem um layout particular alem do label "fechado" conforme layout.

### Tela "Previdências"

- A lista de "previdências" deve ser carregada através de uma chamada a api.
- A lista de "previdências" deve estar em ordem alfabética.
- A tela contem um filtro de múltipla escolha que atua sobre a lista de "previdências". Quando selecionado os filtros:
  - "SEM TAXA": inclui as previdências com taxa igual a zero.
  - "R$100,00": inclui as previdências com valor mínimo igual a cem reais.
  - "D+1": inclui as previdências com resgate igual a um.

### Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React-Native]
- [styled-components][react-native]
- [Typescript][typescript]
- [Eslint][eslint]
- [Axios][axios]
- [Yarn]
- [VS Code][vc]

## Como usar

Para utilizar esta aplicação, você precisa do [Git](https://git-scm.com), [Node.js v14.15.5][nodejs] ou superior + [Yarn v1.13][yarn] ou superior instalado no seu computador. Caso queira utilizar o emulador de android ou IOS siga o tutorial [para android](https://react-native.rocketseat.dev/android/windows) ou este para [macOS](https://react-native.rocketseat.dev/android/macos) Na sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/pedrohenrque/kinvo-mobile-test.git

# Entre no repositório
$ cd appmobile

# Instale as dependências
$ yarn ou npm install

# Rode a aplicação no emulador ou via USB(Windows)
$ yarn android

# Rode a aplicação (MacOs). Ter dois terminais abertos, no primeiro insira
$ yarn start ou npm start

# Em outro terminal
$ npx react-native run-ios ou yarn ios




```

---

Powernerd by Pedro Henrique - [Follow me on linkedin!](https://www.linkedin.com/in/pedrohenrque/)

[nodejs]: https://nodejs.org/
[styled-components]: https://styled-components.com/
[reactjs]: https://pt-br.reactjs.org/
[typescript]: https://reactnative.dev/docs/typescript
[react-native]: https://reactnative.dev/
[axios]: https://github.com/axios/axios
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[eslint]: https://eslint.org/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
