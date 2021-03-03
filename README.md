# Desafio Kinvo
```
https://github.com/qiller/kinvo.git
```
## Project folder
```
cd kinvo
```
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
react-native run-android
```

### Tela Ações
![](https://i.imgur.com/eEXBdiz.gif)

### Tela Fundos
![](https://i.imgur.com/SRedAFr.gif)

### Tela Previdências
![](https://i.imgur.com/GkmkXFV.gif)



### Obs
```
Tenha certeza que possui o gerenciador de pacotes npm e o react-native instalados no ambiente.
```
=======

# React Native Code Challenge

## Instruções:

1. Faça um fork deste repositório;
2. Siga as especificações;
3. Implemente o layout disponível;
4. Após terminar seu teste submeta um pull request e aguarde seu feedback.

## Especificações:

O desafio consiste em desenvolver um aplicativo de **4 telas**.

As telas que contem chamadas a api devem estar preparadas para tratar estados de erro (sem internet), carregamento (chamada a api em andamento) e lista vazia (quando o resultado de um filtro não contem itens).

**Atentar para o comportamento dos elementos do layout, como: botão de favorito, classificação em estrelas, rentabilidade, etc (encontram-se no XD).**

### Tela "Desafio" (Tela inicial)

- A tela inicial contem uma lista que permite o usuário navegar para as três telas: Ações, Fundos e Previdências.

### Tela "Ações"

- A lista de "ações" deve ser carregada através de uma chamada a api.
  - Api: https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks
- A lista de "ações" deve obedecer a seguinte prioridade:
   - Favoritadas deve aparecer primeiro
   - Ordem alfabética
- O usuário pode favoritar/desfavoritar uma "ação" tocando no ícone do coração(o coração preenchido indica favoritado e o coração vazado indica desfavoritado).
- A lista de "ações" inicia com todos as "ações" desfavoritadas.

### Tela "Fundos"

- A lista de "fundos" deve ser carregada através de uma chamada a api.
  - Api: https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds
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

### Pré-requisitos:

- Criar um passo a passo de como rodar o app - [Sugestão](https://github.com/elsewhencode/project-guidelines/blob/master/README.sample.md);
- Desenvolver o app utilizando `React Native`

### O que iremos avaliar

- Capacidade de abstração
- Simplicidade da solução
- Componentização
- Princípio da reutilização
- Clean Code

### O que vai te diferenciar

- Utilizar TypeScript
- Realizar testes unitários

## Material:

- O layout em formato Adobe XD consta no repositório em [/material](/material) ou através [desse link](https://xd.adobe.com/view/4701a220-a119-482a-89a5-4d110332e25f-1252/);
- Imagens e Ícones devem ser exportados do Adobe XD (Aalho: CTRL + E / CMD + E)

## Submissão

Para iniciar o teste, faça um fork deste repositório, crie uma branch com o seu nome e depois envie-nos o pull request.
Se você apenas clonar o repositório não vai conseguir fazer push e depois vai ser mais complicado fazer o pull request.

**Sucesso!**
>>>>>>> 2f98eaec9fa7c913c4430c484e10408b93ae787c
