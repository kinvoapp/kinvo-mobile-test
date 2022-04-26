> ![Logo Kinvo](https://github.com/cbfranca/kinvo-front-end-test/blob/master/logo.svg)

# React Native Code Challenge 

Seja bem-vindo! Este desafio foi projetado para avaliar a capacidade técnica de candidatos à vagas de Desenvolvedor voltadas para o desenvolvimento mobile, independente da senioridade, considerando o framework `React Native`. O nível de exigência da avaliação se adequa ao nível da vaga.

## Instruções:

1. Faça um `fork` deste repositório;
2. Siga as especificações;
3. Implemente o layout disponível;
4. Após terminar seu teste submeta um `pull request` e aguarde seu feedback.

### Critérios de avaliação:

Nossos critérios de avaliação se baseiam e 3 grandes áreas, sendo elas:
1. Versionamento
2. Projeto e estrutura
3. Qualidade de Código

### Pré-requisitos:

- Criar um passo a passo de como rodar o app - [Sugestão](https://github.com/elsewhencode/project-guidelines/blob/master/README.sample.md);
- Desenvolver o app utilizando `React Native`
- Criar o projeto utilizando a CLI do `React Native` - Siga o passo a passo de instalação e configuração do ambiente de acordo com o seu sistema operacional [React Native CLI Quickstrat -> Seu sistema operacional -> iOS/Android](https://reactnative.dev/docs/environment-setup)

## Especificações:

O desafio consiste em desenvolver um aplicativo de **4 telas**. Sendo **3 obrigatórias** e **1 opcional**:
- Obrigatórias:
  - Tela "Desafio" (Tela inicial)
  - Tela "Ações"
  - Tela "Previdências"
- Opcionais:
  - Tela "Fundos" 

As telas que contem chamadas a API devem estar preparadas para tratar estados de erro (sem internet), carregamento (chamada a API em andamento) e lista vazia (quando o resultado de um filtro não contem itens ou o retorno da API foi vazio).

**Atentar para o comportamento dos elementos do layout, como: botão de favorito, classificação em estrelas, rentabilidade, etc (encontram-se no XD).**

### Tela "Desafio" (Tela inicial) (Obrigatória)

- A tela inicial contem uma lista que permite o usuário navegar para as três telas: Ações, Fundos e Previdências.

### Tela "Ações" (Obrigatória)

- A lista de "ações" deve ser carregada através de uma chamada a api.
  - Api: https://6266f62263e0f382568936e4.mockapi.io/stocks
- A lista de "ações" deve obedecer a seguinte prioridade:
   - Favoritadas deve aparecer primeiro
   - Ordem alfabética
- O usuário pode favoritar/desfavoritar uma "ação" tocando no ícone do coração(o coração preenchido indica favoritado e o coração vazado indica desfavoritado).
- A lista de "ações" inicia com todos as "ações" desfavoritadas.

### Tela "Fundos" (Opcional)

- A lista de "fundos" deve ser carregada através de uma chamada a api.
  - Api: https://6266f62263e0f382568936e4.mockapi.io/funds
- A lista de "fundos" deve estar em ordem alfabética.
- Os estados do fundo são:
  - 0: Comum
  - 1: Novo
  - 2: Fechado
- Um "fundo" com o estado de "comum" deve apresentar o layout básico conforme layout.
- Um "fundo" com o estado de "novo" deve apresentar o layout básico com a adição do label "novo" conforme layout.
- Um "fundo" com o estado de "fechado" tem um layout particular alem do label "fechado" conforme layout.

### Tela "Previdências" (Obrigatória)

- A lista de "previdências" deve ser carregada através de uma chamada a api.
  - Api: https://6266f62263e0f382568936e4.mockapi.io/pension
- A lista de "previdências" deve estar em ordem alfabética.
- A tela contem um filtro de múltipla escolha que atua sobre a lista de "previdências". Quando selecionado os filtros:
   - "SEM TAXA": inclui as previdências com taxa igual a zero.
   - "R$100,00": inclui as previdências com valor mínimo igual a cem reais.
   - "D+1": inclui as previdências com resgate igual a um.

### O que iremos avaliar

- Capacidade de abstração;
- Simplicidade da solução;
- Componentização;
- Princípio da reutilização;
- Clean Code;

### O que vai te diferenciar

- Utilizar `TypeScript`;
- Arquitetura limpa e princípios de `SOLID`;
- Utilizar `Styled Components`;

## Material:

- O layout em formato Adobe XD consta no repositório em [/material](/material) ou através [desse link](https://xd.adobe.com/view/bdf98d73-524d-41b3-96ac-1f1813d75809-e8aa/);
- Imagens e Ícones podem ser exportados do Adobe XD (Aalho: CTRL + E / CMD + E)
  - Os `assets` para exportação estão agrupados em **Componentes** e podem ser facilmente exportados da seguinte utilizando o grupo Ativos no modo de desnvolvimento do Adobe XD Web.

## Notas:

! Importante ! O cumprimento dos requisitos solicitados para uma vaga em determinado nível não é garantia de aprovação. Focamos em avaliar a forma como os requisitos foram cumpridos.
Apesar da listagem de requisitos mínimos acima, caso não tenha tido tempo suficiente ou tenha se esbarrado em alguma dificuldade, entregue o desafio ainda que incompleto e conte-nos na descrição do pull request quais foram as suas maiores dificuldades. Não se preocupe, avaliaremos ainda assim! :)
Caso não tenha familiaridade com o Adobe XD, os ativos do protótipo podem ser exportados utilizando o atalho CTRL + E ou CMD + E. Caso o seu sistema operacional não seja compatível com o software, você pode acessar o protótipo também através do link citado no item anterior;
As bibliotecas e demais recursos sugeridos por nós em todos os níveis de exigência são meras sugestões (com exceção do React Native). Sinta-se a vontade para fazer a escolha que te deixa mais confortável e inclusive para sugerir ;);
Lembre-se de fazer um fork deste repositório! Apenas cloná-lo vai te impedir de criar o pull request e dificultar a entrega;

Está com alguma dificuldade, encontrou algum problema no desafio ou tem alguma sugestão pra gente? Crie uma issue e descreva o que achar necessário.

**Sucesso!**
