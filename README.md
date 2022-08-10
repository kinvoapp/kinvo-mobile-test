
> ![Logo Kinvo](https://raw.githubusercontent.com/kinvoapp/kinvo-front-end-test/edd338683b58e87db766d6153b0f8908d14cc79b/logo.svg)
# React Native Challenge

Este projeto é a resolução de um desafio projetado para avaliar a capacidade técnica de candidatos à vagas de Desenvolvedor voltadas para o desenvolvimento mobile na empresa `Kinvo`.

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](https://raw.githubusercontent.com/felipegomss/kinvo-mobile-test/master/LICENSE)

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Executar localmente

Clonar o projeto

```bash
  git clone https://github.com/felipegomss/kinvo-mobile-test.git
```

Entrar no diretório do projeto

```bash
  cd kinvo-mobile-test
```

Instalação do Expo CLI

| Gerenciador | Comando     | 
| :-------- | :------- | 
| npm | `npm install -g expo-cli` | 
| yarn | `yarn global add expo-cli` | 

Instalação de dependências

```bash
  yarn install
```

```bash
  expo install
```

Start no server

```bash
  expo start
```
## Referencias de API

#### API endpoint

```https
  GET https://SECRET.mockapi.io/:endpoint
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `SECRET` | `string` | **Required**. 6266f62263e0f382568936e4 |

#### Parâmetros da rota


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `stocks`  | `string` | **Required**. Lista de ações |
| `funds`  | `string` | **Required**. Lista de fundos |
| `pension`  | `string` | **Required**. Lista de previdências |

#### Exemplo

```https
  GET https://6266f62263e0f382568936e4.mockapi.io/stocks
```

## Tech Stack

 ####  [`Axios`](https://axios-http.com/ptbr/) 
 ####  [`Typescript`](https://www.typescriptlang.org/)
 ####  [`React Native`](https://reactnative.dev/)
 ####  [`Styled-Components`](https://styled-components.com/)  
####  [`Expo * Bare Workflow`](https://expo.dev/)






