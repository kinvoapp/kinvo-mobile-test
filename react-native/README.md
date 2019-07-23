#### Execução do projeto:
**Obs.1:** É necessário ter o **react-native** instalado na computador, antes de executar o projeto ([mais informações](https://facebook.github.io/react-native/docs/getting-started.html)).

Inicialmente instalar os pacotes/dependências básicas do node: `npm install`, dentro da pasta do projeto "kinvo".

E como o projeto utiliza depências externas do React Native, deve-se instalar conforme as orientações a seguir:

* **axios:**
    `$ npm install axios`

* **Toast:**
    `$ npm install react-native-whc-toast`

* **lodash:**
    `$ npm install lodash`

* **react-navigation:**
    Este projeto utilizou o **createStackNavigator**, então com base nas orientações do [React Navigation 3.x](https://reactnavigation.org/docs/pt-BR/getting-started.html), para utilizar esse tipo de layout deve-se adicionar a dependência: `$ npm install react-navigation`. 

    E, uma outra dependência: `$ npm install react-native-gesture-handler`

**Obs.2:** Dependendo da versão do React Native instalado no computador, é necessário uma linkagem manual de cada dependência externa instalada:
`react-native link <nome da dependencia>`