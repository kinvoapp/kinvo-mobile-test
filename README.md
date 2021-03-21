
# React Native Code Challenge
 Documento dividido em três partes:
 - [ ] Getting Started
 - [ ] Especificações do projeto
 - [ ] Documentação técnica do projeto



# Installing / Getting started
### Requiremnts
 - [ ] [Node.js](https://nodejs.org/en/).
 - [ ] Android SDK
 - [ ] [ANDROID_HOME environment variable](https://reactnative.dev/docs/environment-setup).

### Environment variable
#### .env
Create file `.env` with the key *BASE_URL= https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/*
#### local.properties
 -Go to your react-native Project then go to **android** directory Create a file with following name: `local.properties`
 - Open the file and paste your Android SDK path like below:
 #### For windows users:
- `sdk.dir=C:\\Users\\UserName\\AppData\\Local\\Android\\sdk`
 #### For Mac users:
- `sdk.dir = /Users/USERNAME/Library/Android/sdk`

#### For Linux users:
- sdk.dir = /home/USERNAME/Android/Sdk

### Step 1: Start Metro
To start Metro, run npx react-native start inside your React Native project folder:
`yarn start` or `npx react-native star`

### Step 2: Start your application
` yarn android` or `npx react-native run-android`



# Especificações:

O desafio consiste em desenvolver um aplicativo de **4 telas**.

As telas que contem chamadas a api devem estar preparadas para tratar estados de erro (sem internet), carregamento (chamada a api em andamento) e lista vazia (quando o resultado de um filtro não contem itens).

**Atentar para o comportamento dos elementos do layout, como: botão de favorito, classificação em estrelas, rentabilidade, etc (encontram-se no XD).**

### Tela "Desafio" (Tela inicial)

- A tela inicial contem uma lista que permite o usuário navegar para as três telas: Ações, Fundos e Previdências.

### Tela "Ações"
- A lista de "ações" deve obedecer a seguinte prioridade:
   - Favoritadas deve aparecer primeiro
   - Ordem alfabética
- O usuário pode favoritar/desfavoritar uma "ação" tocando no ícone do coração(o coração preenchido indica favoritado e o coração vazado indica desfavoritado).
- A lista de "ações" inicia com todos as "ações" desfavoritadas.

### Tela "Fundos"
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
  - Api: https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/pension
- A lista de "previdências" deve estar em ordem alfabética.
- A tela contem um filtro de múltipla escolha que atua sobre a lista de "previdências". Quando selecionado os filtros:
   - "SEM TAXA": inclui as previdências com taxa igual a zero.
   - "R$100,00": inclui as previdências com valor mínimo igual a cem reais.
   - "D+1": inclui as previdências com resgate igual a um.



#Documentação do projeto
## interfaces
Interfaces criadas para facilitar o desenvolvimento e prover uma padronização de respostas,seja para componenentes ou para requisições a chamadas a api.
### Icard
Compõe as informações básicas na construção dos cards das páginas. 

`interface Icard {
  title: string;
  subtitle: string;
  tag?: Itag;
}`

### Itag 
Criada para facilitar a componentizaçãodas tags dos cards. 
`interface Itag {
  color?: string;
  name?: string;
}
`
### IgetStocks
Criada para definir tipagem dos parâmetros esperados da requisição api da chamada `/stocks`. A tipagem possui parâmetros básicos que são herdados por outros tipos **IgetFunds** e **IgetPensions**.
`interface IgetStocks {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  favorite?: boolean;
` 
### IgetFunds
Criada para definir tipagem dos parâmetros esperados da requisição api da chamada `/stocks`. É possível ter três retornos possíves para o status, onde cada retorno é responsáveis por definir uma configuração do componente Tag.
`interface IgetFunds extends IgetStocks {
  type: string;
  rating: number;
  status: 0 | 1 | 2;
}`

## resources
A criação do resources tem como objetivo padronizar e reutilizar determinados parâmetros. Neste projeto foi criado apenas a variável **Color** mapeadas previamente de acordo com o design. O resource pode ser expandido para Strings, criando um StringLocale, o que facilita correções de texto e internacionalização da aplicação.
`const colors = {
  primary: '#6F4DBF',
  secundary: '#40C5D6',
  gray01: '#627179',
  gray02: '#DAE0E3',
  gray03: '#ECF0F2',
  gray04: '#818181',
 `

## routes
O app possui quatro rotas disponíveis:`Challenge`que redireciona para a tela principal do aplciativo, `Stock`que redireciona para a página/tela de **Ações**, `Fund` que redireciona para a página/tela de **Fundos** e por fim, `Pension`que redireciona para a página/tela de previdência.

É possível encontrar as páginas no diretório `src/page`. O nomes das páginas seguem o padrão de Nome da rota + sufixo **Page**. Logo temos,**ChallengePage**, **FundPage**, **PensionPage**,**StockPage**.


## utils
O diretório Utils foi criado para reutilizações de funções que podem ser utilizadas em toda a aplicação, evitando assim repetições de código de forma desnecessária.

### function getTagFund(status: IgetFunds['status']): Itag
Retorna  uma Tag de acordo com o status recebido pela requisição API.

###  function sortByFavorite(a: boolean, b: boolean): number
 função criada para ordenação de lista de acordo com um par de boolean.

### function sortByName(a: string, b: string): number
Função criada para retornar o resultado de uma comparação de duas strings com intuito de ordernação.

### function sortByFavoriteAndByName(nameA: string,nameB: string,favoriteA: boolean,  favoriteB: boolean,):Number
Criada para retornar o resultado de uma ordenação que tem com prioridade o status de favorito e posteriormente seu nome.



## Services
Criado para definir a configurações iniciais das requisições API,( baseURL, headers, timeout), e também para definir as funções de requisições api de maneira agrupadas e organizadas com objetivo de facilitar a manutenção, legibilidade e padronização.

Foram criadas as chamadas:
- *`async function fetchStocks(): Promise<IgetStocks[] | null>`*
- *`async function fetchFunds(): Promise<IgetFunds[] | null>`*
- *`async function fetchPensions(): Promise<IgetPensions[] | null>`*
## Components
Por padrão todos os componentes iniciam-se com o prefixo **Kin** para facilitar a busca e diferenciação de componentes nativos.

### KinButtonDefault
Possui o comportamento de handle click. 
Caso de uso: Exibição de erro.

`interface  {
  title: string;
  color?: string;
  onPress?: Function;
}`

### KinButtonFilter
Possui o comportamento de alternação entre dois estados (Ativado/Desativado). 
Caso de uso: tela de Previdência
`interface IkinButton {
  title: string;
  color?: string;
  isHandle?: boolean;
  onPress?: Function;
`

### KinCardChallenge
Card criado para exibição das opções da tela inicial. 
Caso de uso: tela inicial.

`export interface IkinChallenge extends Icard {
  Icon: React.FC;
}`

### KinCardDefault
Card criado de maneira genérica para se adaptar a diferentes telas do projeto.
A depender da propriedade que seja passada como parâmetro, um campo do card será exibido, são eles: `rating, tax, redemption, favorite.` A propriedade **isClosed** define o status do card de acordo com o retorno da api, logo o card possui o estado de `aberto, fechado ,novo`.
Caso de uso: Tela de ações, tela de previdência, tela de fundos.

`export interface IkinCardDefault extends Icard {
  favorite?: boolean;
  minimumValue: number;
  profitability: number;
  tax?: number;
  redemption?: number;
  rating?: number;
  isClosed?: boolean;
  onChanged?: Function;
`
### KinCenter
Centraliza os components ao centro da tela.
Caso de uso: Tela de ações, tela de previdência, tela de fundos.

### KinDivider
Exibe uma linha Horizontal pré-estilizada.
caso de uso: tela de previdência, componente KinCardDefault.
`interface IkinDivider {
  style?: object;
}`

### KinGroupError
Componente para exibição de erro. A depender da propriedade que seja passada o campo será exibido, são eles: `title,subtitle,onPress`.
Caso de uso: Tela de ações, tela de previdência, tela de fundos.

`interface IkinGroupError {
  title?: string;
  subtitle?: string;
  onPress?: Function;
}
`

### KinHeader
Componente para exibição do header de acordo com o design.
Caso de uso: Tela de ações, tela de previdência, tela de fundos.

`interface Iprops {
  title: String;
  onPress?: () => {};
}`

### KinStar
Componente criado para renderização de modo dinâmico das estrelas que representam a avaliação
caso de uso: componente KinCardDefault.

`interface IkinStar {
  rate: number;
  isClosed?: boolean;
}`

### KinTag
Componente para renderização da tag de forma genérica.
caso de uso: KinCardDefault.

