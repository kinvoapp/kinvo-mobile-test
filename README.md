<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# Kinvo app - Teste &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Additional information or tag line

Um Aplicativo com a finalidade de listar Ações, Fundos e Previdências.

## Installing / Getting started

Para rodar o app é necessário ter instalado o react-native-cli em sua maquina.

Comando para baixar o projeto.
```shell
git clone https://github.com/hiagopsilva/kinvo-mobile-test.git && cd kinvo-app
```


Comando para instalar as dependencias do projeto.
```shell
yarn
```
Ou
```shell
npm install
```

Comando para rodar o projeto.

Ambiente Android
```shell
  yarn android
```

Ambiente IOS
```shell
  yarn ios
```

## Developing

### Built With
- React
- React native
- Styled Components
- PlatformBuilders Helpers
- React Navigation
- React Native Vector Icons
- React Native Typography

### Setting up Dev

Para utilizar o projeto abra o cmd e execute o comando abaixo.
```shell
git clone https://github.com/hiagopsilva/kinvo-mobile-test.git
cd kinvo-app
```

Após isso execute:
```shell
  yarn
```
Ou
```shell
  npm install
```

O código acima realiza uma copia do projeto no seu ambiente local, entra na pasta e instala as dependencias.

## Api Reference

Para este projeto foi utilizado uma api externa e abaixo está a explicação de cada rota.

Link da api 
```shell
  https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks
```
A primeira rota "/stocks", lista todas as ações e voce pode encontrar a chamada da api dentro projeto através do caminho:
```shell
  src/scenes/Actions/index.ts
```

A primeira rota "/funds", lista todas os Fundos e você pode encontra a chamada da api dentro através do caminho:
```shell
  src/scenes/Funds/index.ts
```

A primeira rota "/pension", lista todas as Previdências e você pode encontrar a chamada da api dentro através do caminho:
```shell
  src/scenes/Predictions/index.ts
```