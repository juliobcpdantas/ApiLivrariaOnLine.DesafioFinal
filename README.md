# API Livraria On-Line
## Projeto Desafio Final Bootcamp IGTI BackEnd NODE.JS

### <strong>Objetivos</strong>

* Exercitar os conceitos trabalhados no Curso para a criação de uma API em Node.js com 
Express, organizada em camadas, com autenticação, persistência em bancos de dados 
SQL, NoSQL e testes.<br/>

1. Criação do banco de dados relacional: <br/>
    > - Criação de uma instância do PostgreSQL no ElephantSQL - [:heavy_check_mark:]
    >> - Tabelas criadas conforme:<br/>
    <img src="/img/DB.relacional.jpg"><br/>
    >> - Inserts de cliente, autores, livros e vendas conforme "inserts.txt" - [:heavy_check_mark:]
    <br/>
2. Criação do banco de dados NoSQL: <br/>
    > - Crialção de uma instância do MongoDB no MongoDB Atlas - [ ]
    >> - criar uma collection chamada “livroInfo” para armazenar info dos livros - [ ]
3. Desenvolvimento dos endpoints: <br/>
    > - Criar projeto "livraria-api" em Node.js - [ ]
    > - Criação de projeto base - [ ]
    >> - a) Configurações iniciais - [ ]
    >> - b) Criação de rotas - [ ]
    >> - c) Tratamento de erros - [ ]
    >> - d) Gravação de logs - [ ]
    >> - e) Organização do projeto em:
    >>> - * Route - [ ]
    >>> - * Controller - [ ]
    >>> - * Service - [ ]
    >>> - * Repository - [ ]
    > - Criar endpoints pelo Express - [ ]
    >> - Endpoints de Clientes:
    >>> - a) Cadastro de um cliente: POST - [ ]
    >>> - b) Atualização de um cliente: PUT - [ ]
    >>> - c) Exclusão de um cliente: DELETE - [ ]
    >>> - d) Constultar clientes cadastrados: GET - [ ]
    >>> - e) Consultar cliente especifico por Id: GET - [ ]
    >> - Parametrizar Regra de negócio por Endpoit/Clientes:
    >>> - * a) - [ ] 
    >>> - * b) - [ ]
    >>> - * c) bloquear exclusão se houver venda cadastrado em seu nome - [ ]
    >>> - * d) retornar todos cliente e suas informações, exceto a senha - [ ]
    >>> - * e) retornar o cliente e suas informações, exceto a senha - [ ]
    >> - Endpoints de Autores:
    >>> - a) Cadastro de um autor: POST - [ ]
    >>> - b) Atualização de um autor: PUT - [ ]
    >>> - c) Exclusão de um autor: DELETE - [ ]
    >>> - d) Constultar autor cadastrados: GET - [ ]
    >>> - e) Consultar autor especifico por Id: GET - [ ]
    >> - Parametrizar Regra de negócio por Endpoit/Clientes:
    >>> - * a) - [ ]
    >>> - * b) - [ ] 
    >>> - * c) bloquear exclusão se houver livro seu cadastrado - [ ]
    >>> - * d) - [ ]
    >>> - * e) - [ ]
    >> - Endpoints de Livros:
    >>> - a) Cadastro de um livro: POST - [ ]
    >>> - b) Atualização de um autor: PUT - [ ]
    >>> - c) Exclusão de um autor: DELETE - [ ]
    >>> - d) Constultar autor cadastrados: GET - [ ]
    >>> - e) Consultar autor especifico por Id: GET - [ ]
    >> - Parametrizar Regra de negócio por Endpoit/Clientes:
    >>> - * a) - [ ]
    >>> - * b) - [ ] 
    >>> - * c) bloquear exclusão se houver livro seu cadastrado - [ ]
    >>> - * d) - [ ]
    >>> - * e) - [ ]
