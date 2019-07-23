#### Execução do projeto:
**Obs.1:** É necessário ter o **react-native** instalado na máquina, antes de executar o projeto ([mais informações](https://facebook.github.io/react-native/docs/getting-started.html)).

Após fazer o clone, fork ou download, navegue até a pasta do projeto `$ cd /.../kinvo/` e instale os pacotes/dependências básicas do node: `npm install`.

Para o projeto, necessitou-se instalar dependências externas do **react-native**, que estão listadas abaixo:

* **Instalar o axios:**
    `$ npm install axios`

* **Instalar o Toast:**
    `$ npm install react-native-whc-toast`

* **Instalar o lodash:**
    `$ npm install lodash`

* **Instalar o react-navigation:**
    Este projeto utilizou o **createStackNavigator**, então com base nas orientações do [React Navigation 3.x](https://reactnavigation.org/docs/pt-BR/getting-started.html), para utilizar esse layout deve-se adicionar a dependência: `$ npm install react-navigation`. 

    E, uma outra dependência: `$ npm install react-native-gesture-handler`

**Obs.2:** Dependendo da versão do React Native instalado no computador, é necessário uma linkagem manual de cada dependência externa instalada:
`react-native link <nome da dependencia>`