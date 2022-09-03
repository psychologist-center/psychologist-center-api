<p align="center">
  <a target="blank"><img width="100%"src="https://i.imgur.com/sx7tcmu.png" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">MenteSã ajuda você a acompanhar todas as consultas que você tem com seus pacientes registrados.</p>
    <p align="center">

## Tecnologias

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)

## Funcionalidades
Obs: Funcionalidades desmarcadas estão em andamento

 - [x] - Cadastro de profissionais
 - [x] - Cadastro de pacientes
 - [x] - Autenticação de usuário na plataforma
 - [x] - Exclusão de pacientes
 - [ ] - Visualizar detalhes de pacientes
 - [x] - Listagem de pacientes com paginação
 - [x] - Listagem de profissionais com paginação
 - [x] - Edição de informações cadastrais de pacientes e profissionais
 - [x] - Agendamento de sessão
 - [x] - Listagem de sessões com paginação
 - [x] - Editar sessões cadastradas
 - [ ] - Visualizar detalhes de sessão


## Descrição

Mente Sã é um software projetado para ajudar profissionais a organizarem suas consultas e acompanhamentos com seus pacientes. Permitindo registro de profissionais (psicólogos, psiquiatras, neurologistas), bem como dos seus respectivos pacientes. Todas as sessões podem ser registradas e monitoradas através de um painel, que facilita o gerenciamento de múltiplas bases de dados e melhora sua eficiência como profissional.

## Executando a API

Siga o passo-a-passo para excutar o projeto


##### Clone o projeto
```bash
$ git clone https://github.com/DavidAugustoo/MenteSa-backend.git
```

##### Instale as dependências
```bash
$ npm run start-dev
```

##### Configure as variáveis de ambiente
```bash
MONGO_URL= #Insira a url de conexão do seu banco de dados mongodb

SALT_KEY= #Insira uma string aléatoria de criptografia para o token

PORT=8080
```

##### Inicie o servidor
```bash
$ npm run start-dev
```

##### Acesse a documentação
```bash
http://localhost:8080/api-docs/
```

## Suporte

- Documentação da API - [Acessar Swagger](https://mentesa.azurewebsites.net/api-docs/)

- Documentação do Projeto - [Acessar PDF](https://drive.google.com/file/d/1U6BPduRu61tPzoFHiDDpq7ZMQ5s76X7J/view?usp=sharing)

## Contato

- Author - [David Augusto](https://davidaugusto.tech/)
- Linkedin - [/in/davidaugustoo/](https://www.linkedin.com/in/davidaugustoo/)
- Github - [@davidaugustoo](https://github.com/DavidAugustoo)
