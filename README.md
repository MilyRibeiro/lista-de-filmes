# Lista de Filmes

A Lista de Filmes é um aplicativo organizador de filmes que permite cadastrar, listar, editar e deletar filmes, incluindo informações como o título e o gênero.

## 🔨 Funcionalidades do projeto

`Cadastro de filmes`: Permite adicionar novos filmes à lista, inserindo informações como o título e o gênero.

`Listagem de filmes`: Exibe os filmes cadastrados, permitindo visualizar o título e o gênero.

`Edição de filmes`: Permite editar os filmes existentes, atualizando as informações conforme necessário.

`Exclusão de filmes`: Permite remover filmes da lista.

`Busca typeahead`: Implementa uma funcionalidade de busca com sugestões automáticas, permitindo filtrar filmes conforme a pessoa digita.

`Favoritar filmes`: Adiciona a opção de favoritar filmes, destacando os favoritos na lista para fácil acesso.

`Validações de formulário com Regex`: Utiliza expressões regulares para validar campos do formulário, garantindo que os dados inseridos estejam no formato correto antes do envio.

`Cadastro e manipulação de data`: Permite registrar a data do lançamento do filme, garantindo que cada filme esteja associado a um timestamp.


## ✔️ Técnicas e tecnologias utilizadas

`JavaScript`: Linguagem de programação utilizada para desenvolver a lógica do aplicativo.

`Fetch API`: Utilizada para realizar requisições HTTP para comunicação com o servidor.

`Axios`: Biblioteca usada para facilitar e simplificar as requisições HTTP.

`Node.js`: Plataforma utilizada para executar o ambiente de desenvolvimento.

`JSON Server`: Utilizado para simular um backend e facilitar o desenvolvimento e teste das operações CRUD.

`CSS`: Utilizado para estilização da interface do aplicativo.


## 📁 API Fake
Você pode [acessar a API Fake do projeto aqui](https://github.com/MilyRibeiro/lista-de-filmes/blob/main/backend/db.json).

## 🛠️ Abrir e rodar o projeto

Para executar a API fake, você vai precisar do NodeJS; a versão utilizada foi a 20.12.2.

Instale o JSON Server globalmente (se ainda não estiver instalado):

```bash
npm install -g json-server
```

Crie o arquivo package.json:

```bash
npm init -y
```

Para executar, abra um novo terminal e, dentro da pasta backend, execute:

```bash
npm start
```

Acesse o backend localmente em seu navegador:

http://localhost:3000

Para executar o frontend, abra o projeto no Visual Studio Code. Com a extensão Live Server instalada, clique com o botão direito no arquivo index.html e selecione "Open with Live Server" no menu de contexto.

Acesse o frontend localmente em seu navegador:

http://localhost:5500
