# Equipe ReactJS

Página para configuração de um squad de acordo com os respectivos times implementada com ReactJS.

<img src="/public/imagens/banner.png">

## Passos para executar o projeto:


### Execução com Docker

Para preparar o ambiente, execute :

- `make build`

Executar o comando `make run` no terminal na pasta do projeto para o Docker instalar todo o necessário
  
- Após a execução do comando, as dependências estarão baixadas dentro da pasta `node_modules` dentro da pasta do projeto
- Para executar o projeto posteriormente, basta executar o comando `make server-dev` dentro da pasta do projeto


Acessar a aplicação no endereço http://localhost:3000


### Execução manual com o npm


**1)** Download Git - https://git-scm.com/downloads

**2)** Abrir Git Bash na pasta onde o projeto será desenvolvido e executar os comandos para baixar o projeto:

```
git config --global user.name "NOME DO USUÁRIO"
git config --global user.email "E-MAIL DO USUÁRIO"
git clone https://gitlab.com/lemobs-sigelu/atende/sigelu-atende-api.git
```

**3)** Entrar na pasta do projeto

**4)** Instalar Node versão 16.17.0 (versão recomendada!) - https://nodejs.org/download/release/v16.17.0/

**5)** Executar os seguintes comandos no Git Bash para instalar as dependências necessárias, ainda na pasta do projeto:

```
npm install
```

**6)** Executar o seguinte comando no Git Bash para iniciar a aplicação:

```
npm start
```

Acessar a aplicação no endereço http://localhost:3000
