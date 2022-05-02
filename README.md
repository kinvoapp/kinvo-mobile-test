<p align="center"> 
  <img src='https://github.com/cbfranca/kinvo-front-end-test/blob/master/logo.svg' width="300px"/>
</p>

<p align="center">
	<a href="https://www.linkedin.com/in/wesley-andrade/">	
		<img src="https://img.shields.io/static/v1?label=&message=WesleyAndrade&color=29b6d1&style=flat&logo=linkedin"/>
	</a>
	<a href="https://choosealicense.com/licenses/mit/">	
		<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=00c7c7&style=flat"/>
	</a>
</p>

<p align="center">
  <a href="#challenge">Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuração">Configuração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#objetivos">Objetivos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_with_curl-licencia">Licença</a>
</p>

## Challenge

Este desafio foi projetado para avaliar a capacidade técnica de candidatos à vagas de Desenvolvedor voltadas para o desenvolvimento mobile, independente da senioridade, considerando o framework `React Native`. O nível de exigência da avaliação se adequa ao nível da vaga.


## Configuração
  ```bash
  # Clone do Repositorio
  $ git clone https://github.com/WesleyReboucas/kinvo-mobile-test.git

  # Instalação de depedencias
  $ npm install

  # Instalando aplicação
  $ npx react-native run-android

  # Iniciando aplicação
  $ npx react-native start
  ```
### Api Reference
 - Stocks: https://6266f62263e0f382568936e4.mockapi.io/stocks
 - Funds: https://6266f62263e0f382568936e4.mockapi.io/funds
 - Pensions: https://6266f62263e0f382568936e4.mockapi.io/pension

## Tecnologias

- [Typescript](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Axios](https://github.com/axios/axios)
- [Styled-Components](https://styled-components.com/)



## Objetivos

  ### :page_with_curl: Pré-requisitos:
   - [X] Criar um passo a passo de como rodar o app ;
   - [X] Desenvolver o app utilizando `React Native`;
   - [X] Criar o projeto utilizando a CLI do `React Native`;

   - [X] Utilizar `TypeScript`;
   - [x] Arquitetura limpa e princípios de `SOLID`;
   - [X] Utilizar `Styled Components`;

### 📺 Tela "Desafio" (Tela inicial) (Obrigatória)

  - [X] A tela inicial contem uma lista que permite o usuário navegar para as três telas: Ações, Fundos e Previdências.

### 📺 Tela "Ações" (Obrigatória)

  - [X] A lista de "ações" deve ser carregada através de uma chamada a api.
  - [X] A lista de "ações" deve obedecer a seguinte prioridade:
     - [ ] Favoritadas deve aparecer primeiro
     - [X] Ordem alfabética
  - [X] O usuário pode favoritar/desfavoritar uma "ação" tocando no ícone do coração(o coração preenchido indica favoritado e o coração vazado indica desfavoritado).
  - [X] Botão de favorito
  - [X] A lista de "ações" inicia com todos as "ações" desfavoritadas.
  - [X] Tratar estados de erro (sem internet)
  - [X] Carregamento (chamada a API em andamento)
  - [ ] Lista vazia (quando o resultado de um filtro não contem itens ou o retorno da API foi vazio)

### 📺 Tela "Previdências" (Obrigatória)

  - [X] A lista de "previdências" deve ser carregada através de uma chamada a api.
  - [X] A lista de "previdências" deve estar em ordem alfabética.
  - [X] A tela contem um filtro de múltipla escolha que atua sobre a lista de "previdências". Quando selecionado os filtros:
     - [X] "SEM TAXA": inclui as previdências com taxa igual a zero.
     - [X] "R$100,00": inclui as previdências com valor mínimo igual a cem reais.
     - [X] "D+1": inclui as previdências com resgate igual a um.
  - [X] Tratar estados de erro (sem internet)
  - [X] Carregamento (chamada a API em andamento)
  - [ ] Lista vazia (quando o resultado de um filtro não contem itens ou o retorno da API foi vazio)

### 📺 Tela "Fundos" (Opcional)

  - [X] A lista de "fundos" deve ser carregada através de uma chamada a api.
  - [X] A lista de "fundos" deve estar em ordem alfabética.
  - [ ] Os estados do fundo são:
    - [ ] 0: Comum
    - [ ] 1: Novo
    - [ ] 2: Fechado
  - [ ] Classificação em estrelas 
  - [ ] Um "fundo" com o estado de "comum" deve apresentar o layout básico conforme layout.
  - [ ] Um "fundo" com o estado de "novo" deve apresentar o layout básico com a adição do label "novo" conforme layout.
  - [ ] Um "fundo" com o estado de "fechado" tem um layout particular alem do label "fechado" conforme layout.
  - [ ] Tratar estados de erro (sem internet)
  - [X] Carregamento (chamada a API em andamento)
  - [ ] Lista vazia (quando o resultado de um filtro não contem itens ou o retorno da API foi vazio)

## :page_with_curl: Licencia
<a href="https://choosealicense.com/licenses/mit/">
	<img src="https://img.shields.io/static/v1?label=License&message=2020&color=A31F34&style=flat"/>
</a>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://choosealicense.com/licenses/mit/) para mais detalhes.

---

Feito com ♥ by Wesley Rebouças
